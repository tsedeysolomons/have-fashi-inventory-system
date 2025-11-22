"""
Script to create a Django superuser programmatically
Run this with: python create_superuser.py
"""
import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

username = 'Tsedeys'
email = 'tsedeys19@gmail.com'
password = 'tsedey123'

if User.objects.filter(username=username).exists():
    print(f'User {username} already exists!')
else:
    User.objects.create_superuser(username=username, email=email, password=password)
    print(f'Superuser {username} created successfully!')
    print(f'Username: {username}')
    print(f'Password: {password}')

