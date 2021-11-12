<?php include('partials/header.php'); ?>

<main class="container pgContact" id="pgContact">
	<section class="row">
		<article class="col-md-8 offset-md-2">
			<form action="" id="formContact">
				<div class="mb-3">
					<label for="txtFName" class="form-label">First Name</label>
					<input type="text" name="fName" id="txtFName" class="form-control">
				</div>
				<div class="mb-3">
					<label for="txtLName" class="form-label">Last Name</label>
					<input type="text" name="lName" id="txtLName" class="form-control">
				</div>
				<div class="mb-3">
					<label for="txtEmail" class="form-label">Email</label>
					<input type="email" name="txtEmail" id="txtEmail" class="form-control">
				</div>
				<div class="mb-3">
					<label for="selGameGenre" class="form-label">Favorite Game Genre</label>
					<select name="selGameGenre" id="selGameGenre" class="form-control"></select>
				</div>
				<button type="button" id="btnSubmitContact">Submit</button>
			</form>
		</article>
	</section>
	<section class="row">
		<article class="col-12">
			<div id="txtArea"></div>
		</article>
	</section>
</main>

<?php include('partials/footer.php'); ?>