"""
    Custom Paginator
"""

from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage


def custom_paginator(request, queryset):
    page = request.GET.get('page', 1)
    paginator = Paginator(queryset, 2)
    try:
        data = paginator.page(page)
    except PageNotAnInteger:
        data = paginator.page(1)
    except EmptyPage:
        data = paginator.page(paginator.num_pages)
    return data
