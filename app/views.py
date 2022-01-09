from django.shortcuts import render
from django.views import View
from .models import PackageGroup, GreatTransformation, Setting, Transformation, FoodPackages
from utils.paginator import custom_paginator
from django.conf import settings
from utils.email import send_html_mail
from django.http import JsonResponse


class HomeView(View):
    template_name = 'home.html'

    def get(self, request, *args, **kwargs):
        packages_group = PackageGroup.objects.all()
        opinion = GreatTransformation.objects.all()
        setting = Setting.objects.first()
        return render(request, self.template_name, {"setting": setting, "packages_group": packages_group, "opinion": opinion})


class AboutView(View):
    template_name = 'about-us.html'

    def get(self, request, *args, **kwargs):
        setting = Setting.objects.first()
        return render(request, self.template_name, {"setting": setting})


class TransformationView(View):
    template_name = 'transformation.html'

    def get(self, request, *args, **kwargs):
        queryset = Transformation.objects.order_by('order').all()
        transformations = custom_paginator(request, queryset)
        # setting = Setting.objects.first()
        return render(request, self.template_name, {"transformations": transformations})


class ContactView(View):
    template_name = 'contact.html'

    def get(self, request, *args, **kwargs):
        # setting = Setting.objects.first()
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        mobile = request.POST.get('mobile', '')
        comment = request.POST.get('comment')
        subject = request.POST.get('subject')
        message = f"""
            Name: {name} 
            email: {email} 
            mobile: {mobile}
            comment: {comment} 
            subject: {subject} 
        """
        send_html_mail(subject=subject, html_content=message, recipient_list=[settings.RECEPIENT])
        return render(request, self.template_name)


class PackagesView(View):
    template_name = 'packages.html'

    def get(self, request, *args, **kwargs):
        groups = PackageGroup.objects.all()
        # setting = Setting.objects.first()
        return render(request, self.template_name, {"groups": groups})


class QuestionnaireView(View):
    template_name = 'questionnaire.html'

    def get(self, request, *args, **kwargs):
        # setting = Setting.objects.first()
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        data = request.POST
        name = data.get('name', '')
        chronic_diseases = data.get('chronic_diseases')
        chronic_diseases_area = data.get('chronic_diseases_area')

        chronic_prevent = data.get('chronic_prevent')
        chronic_prevent_area = data.get('chronic_prevent_area')

        chronic_injuries = data.get('chronic_injuries')
        chronic_injuries_area = data.get('chronic_injuries_area')

        injury_performing = data.get('injury_performing')
        injury_performing_area = data.get('injury_performing_area')

        particular_food = data.get('particular_food')
        particular_food_area = data.get('particular_food_area')

        supplements = data.get('supplements')
        supplements_area = data.get('supplements_area')

        supplements_faster = data.get('supplements_faster')

        daily_Activity = data.get('daily_Activity')

        go_gym = data.get('go_gym')

        When_train = data.get('When_train')

        nutrition_area = data.get('nutrition_area')

        workout_area = data.get('workout_area')

        online_training_area = data.get('online_training_area')

        train_where = data.get('train_where')
        equipment_area = data.get('equipment_area')

        message = f"""
            Trainer Name: {name}
            ---------------------------------------------------------------
            Do you have any chronic diseases ? {chronic_diseases}
            details {chronic_diseases_area}
            ---------------------------------------------------------------
            Does the chronic disease prevent you from performing some daily tasks or exercises ? {chronic_prevent}
            details {chronic_prevent_area}
            ---------------------------------------------------------------
            Do you have any chronic injuries ? {chronic_injuries}
            details {chronic_injuries_area}
            ----------------------------------------------------------------
            Does the injury still prevent you from performing some daily tasks or exercises ? {injury_performing}
            details {injury_performing_area}
            ----------------------------------------------------------------
            Do you have an allergy to a particular type of food ? {particular_food}
            details {particular_food_area}
            ----------------------------------------------------------------
            Do you use supplements ? {supplements}
            details {supplements_area}
            ----------------------------------------------------------------
            Are you willing to use supplements to reach your goal faster ? {supplements_faster}
            ----------------------------------------------------------------
            What is your daily activity level ? {daily_Activity}
            ----------------------------------------------------------------
            How often do you go to the gym (per week) ? {go_gym}
            ----------------------------------------------------------------
            When will you train ? {When_train}
            ---------------------------------------------------------------
            What is your current nutrition plan ? {nutrition_area}
            ---------------------------------------------------------------
            What is your current workout plan ? {workout_area}
            ---------------------------------------------------------------
            What is your main goal of online training ? {online_training_area}
            -------------------------------------------------------------------
            Where will you train ? {train_where}
            equipments {equipment_area}            
        """
        send_html_mail(subject="QUESTIONS", html_content=message, recipient_list=[settings.RECEPIENT])
        return JsonResponse("message sent success To Captin Hawary", status=200, safe=False)


class FoodView(View):
    template_name = 'food.html'

    def get(self, request, *args, **kwargs):
        food_packages = FoodPackages.objects.all()
        return render(request, self.template_name, {"food_packages": food_packages})

    def post(self, request, *args, **kwargs):
        # setting = Setting.objects.first()
        data = dict(request.POST.lists())
        carbohydrate = data.get('carbohydrate', [])
        protein = data.get('protein', [])
        dairy = data.get('dairy', [])
        vegetables = data.get('vegetables', [])
        fruits = data.get('fruits', [])
        name = request.POST.get('food_name')
        attachments = []
        if 'front-side' in request.FILES:
            attachments.append(request.FILES['front-side'])
        if 'side' in request.FILES:
            attachments.append(request.FILES['side'])
        if 'back-side' in request.FILES:
            attachments.append(request.FILES['back-side'])
        if 'in-body' in request.FILES:
            attachments.append(request.FILES['in-body'])

        if 'payment' in request.FILES:
            attachments.append(request.FILES['payment'])

        message = f"""
        Trainer Name {name}
        ----------------------------------------------------------------------
        Trainer Choose from Carbohydrate options: {" || ".join(carbohydrate)}
        -----------------------------------------------------------------------
        from Protein options: {" || ".join(protein)}
        -----------------------------------------------------------------------
        from Dairy options: {" || ".join(dairy)}
        -----------------------------------------------------------------------
        from vegetables options: {" || ".join(vegetables)}
        ----------------------------------------------------------------------
        from Fruits options: {" || ".join(fruits)}
        """
        send_html_mail(subject="QUESTIONS", html_content=message, recipient_list=[settings.RECEPIENT],
                       attachment=attachments)
        food_packages = FoodPackages.objects.all()

        return render(request, self.template_name,  {"food_packages": food_packages})
