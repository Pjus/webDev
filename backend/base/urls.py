from django.conf import settings
from django.conf.urls.static import static

from django.urls import path
from .views.views import hello_world
urlpatterns = [
    path('hello/', hello_world, name='hello_world'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)