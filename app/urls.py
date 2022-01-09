from django.urls import path
from django.contrib import admin
from .views import HomeView, AboutView, TransformationView, ContactView, PackagesView, QuestionnaireView, FoodView
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('about-us/', AboutView.as_view(), name='about-us'),
    path('transformation/', TransformationView.as_view(), name='transformation'),
    path('packages/', PackagesView.as_view(), name='packages'),
    path('contact/', ContactView.as_view(), name='contact'),
    path('questionnaire/', csrf_exempt(QuestionnaireView.as_view()), name='questionnaire'),
    path('food/', FoodView.as_view(), name='food'),

]


admin.site.site_header = 'Hawary Fitness Trainer'
admin.site.index_title = 'Main Page'
admin.site.site_title = 'Hawary admin'
