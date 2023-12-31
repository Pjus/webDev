from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import generics, serializers

@api_view(['GET'])
@permission_classes([AllowAny])
def hello_world(request):
    return Response('Hello, World!!!!')
