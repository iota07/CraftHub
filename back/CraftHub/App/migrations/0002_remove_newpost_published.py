# Generated by Django 4.1.13 on 2024-01-14 12:37

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("App", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="newpost",
            name="published",
        ),
    ]
