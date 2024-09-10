from django.http import HttpResponse
from rest_framework import viewsets
from .models import Workflow
from .serializers import WorkflowSerializer

class WorkflowViewSet(viewsets.ModelViewSet):
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer

def home(request):
    return HttpResponse("<h1>Md Saiful Islam</h1><h2>BRAC University, Bangladesh</h2><h3>Department: CSE</h3><h3>Currently working at Zenov BPO as Associate</h3>")
