# Generated by Django 3.2.5 on 2021-08-25 06:17

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('pengujian', '0002_pengujian_deskripsi'),
    ]

    operations = [
        migrations.AddField(
            model_name='pengujian',
            name='berakhir',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 21, 6, 17, 5, 480630, tzinfo=utc)),
        ),
    ]