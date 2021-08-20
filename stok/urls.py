from django.urls import path

from stok.views.barang_view import BarangView, SelectedBarangView
from stok.views.kategori_view import GetKategoriView

urlpatterns = [
    path('api/barang/', BarangView.as_view(), name='daftar_barang'),
    path('api/barang/<int:pk>', SelectedBarangView.as_view(), name='barang_tertentu'),
    path('api/kategori/', GetKategoriView.as_view(), name='daftar_kategori'),
]
