# Generated by Django 3.2.5 on 2021-08-05 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stok', '0005_auto_20210805_1753'),
    ]

    operations = [
        migrations.AddField(
            model_name='barang',
            name='keterangan',
            field=models.TextField(blank=True),
        ),
    ]
