<template>
    <div class="container add-page">
        <h4>Tambah Harga Bimbingan</h4>
        <form>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Nama Bimbingan</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="" placeholder="Nama Bimbingan">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Harga Bimbingan</label>
                <div class="col-sm-9">
                    <input type="number" class="form-control" id="" placeholder="Harga">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Deskripsi</label>
                <div class="col-sm-9">
                    <textarea class="form-control" id="" placeholder="Deskripsi" rows="5"></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Masukan gambar</label>
                <div class="col-sm-9">
                    <input type="file" id="file" name="file" multiple />
                </div>
            </div>
            <div class="text-right mt-5">
                <button class="btn-save">Simpan</button>
                <a class="btn-kembali" href="/admin/input_harga_bimbingan">Kembali</a>
            </div>
        </form>
    </div>
</template>