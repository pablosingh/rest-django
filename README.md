# Pasos para crear el REST API con Django

pip install virtualenv
python -m venv venv // el ultimo venv es la carpeta que va a crear

luego hay que activar el entorno virtual desde cmd (como adm), ejecutar /venv/scripts/activate.bat

pip install django
django-admin startproject django_crud_api . (importante el punto final)
python manage.py startapp tasks
python manage.py runserver // inicia el servidor

dentro de django_crud_api/settings.py
INSTALLED_APPS = [
...,
'tasks'
]

python manage.py migrate // crea todas las tablas necesarias

pip install djangorestframework
pip install django-cors-headers

---

Dentro de django_crud_api/settings.py
INSTALLED_APPS = [
...,
'corsheaders',
'rest_framework',
'tasks'
]

MIDDLEWARE = [
'django.middleware.security.SecurityMiddleware',
'django.contrib.sessions.middleware.SessionMiddleware',
...,
'corsheaders.middleware.CorsMiddleware', // Este es el que hay agregar antes de CommonMiddleware
'django.middleware.common.CommonMiddleware',
...,
'django.middleware.csrf.CsrfViewMiddleware',
'django.contrib.auth.middleware.AuthenticationMiddleware',
'django.contrib.messages.middleware.MessageMiddleware',
'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOWED_ORIGINS = [
...
]

---

python manage.py runserver // prueba de nuevo el servidor

---

Creando los modelos
Dentro de /tasks/models
Definimos los modelos

---

python manage.py makemigrations tasks // o puede ser sin el tasks - crea el codigo

python manage.py migrate tasks // crea la tabla

---

python manage.py createsuperuser
Pide los datos para el superuser

---

Dentro tasks/admin.py

from .models import Task
admin.site.register(Task)

---

Serialización
Dentro tasks/
creamos el serializer.py

---

configurar el tasks/views.py

---

Crear el tasks/urls.py
se crean automaticamente las GET/POST/PUT/DELETE

---

Dentro de rest_django/urls.py
urlpatterns = [
path('admin/', admin.site.urls),
path('tasks/', include('tasks.urls'))
]

---
