<?php include('partials/header.php'); ?>

<main class="container pgLogin" id="pgLogin">
	<section class="row">
		<article class="col-md-8 offset-md-2">
			<form action="" id="formLogin">
				<div class="mb-3">
					<label for="txtEmail" class="form-label">Email</label>
					<input type="email" name="email" id="email" class="form-control">
				</div>
				<div class="mb-3">
					<label for="txtLName" class="form-label">Password</label>
					<input type="password" name="pw" id="pw" class="form-control">
				</div>
				<button type="button" id="btnLogin">Submit</button>
			</form>
		</article>
	</section>
</main>

<?php include('partials/footer.php'); ?>