from django.contrib import admin
from .models import Package, PackageGroup, GreatTransformation, Setting, Transformation, Slider, PackageDetails, \
    GreatTransformationDetails, Food, FoodPackages, FoodRaw


class PackageAdmin(admin.ModelAdmin):
    model = Package
    list_display = ('name', 'price', 'description')
    search_fields = ('name',)


class PackageGroupAdmin(admin.ModelAdmin):
    model = PackageGroup
    list_display = ('name', 'description')
    search_fields = ('name',)


class GreatTransformationAdmin(admin.ModelAdmin):
    model = GreatTransformation
    list_display = ('name',)
    search_fields = ('name',)


class GreatTransformationDetailsAdmin(admin.ModelAdmin):
    model = GreatTransformationDetails
    list_display = ('description',)


class SettingAdmin(admin.ModelAdmin):
    model = Setting
    list_display = ('about_us', )


class TransformationAdmin(admin.ModelAdmin):
    model = Transformation
    list_display = ('name', 'title', 'description')
    search_fields = ('name', 'title',)


class SliderAdmin(admin.ModelAdmin):
    model = Transformation


class PackageDetailsAdmin(admin.ModelAdmin):
    model = PackageDetails


class FoodAdmin(admin.ModelAdmin):
    model = Food


class FoodPackagesAdmin(admin.ModelAdmin):
    model = FoodPackages


class FoodRawAdmin(admin.ModelAdmin):
    model = FoodRaw


admin.site.register(Package, PackageAdmin)
admin.site.register(PackageGroup, PackageGroupAdmin)
admin.site.register(GreatTransformation, GreatTransformationAdmin)
admin.site.register(Setting, SettingAdmin)
admin.site.register(Transformation, TransformationAdmin)
admin.site.register(Slider, SliderAdmin)
admin.site.register(PackageDetails, PackageDetailsAdmin)
admin.site.register(GreatTransformationDetails, GreatTransformationDetailsAdmin)
admin.site.register(Food, FoodAdmin)
admin.site.register(FoodPackages, FoodPackagesAdmin)
admin.site.register(FoodRaw, FoodRawAdmin)


