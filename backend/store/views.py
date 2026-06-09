from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product,Category
from .serializers import ProductSerializer,CatagorySerializer

def home(request):
    data={
        'message':'welcome to E-commerce Store!'
    }
    return JsonResponse(data)
 
@api_view(['GET'])
def get_products(request):
    product=Product.objects.all()
    serializer=ProductSerializer(product,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_categories(request):
    categories=Category.objects.all()
    serializer=CatagorySerializer(categories,many=True)
    return Response(serializer.data)
     