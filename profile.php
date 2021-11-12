<?php include('partials/header.php'); ?>

<main class="container pgProfile" id="pgProfile">
	<form id="formProfile" action="" method="POST">
	<section class="row secMain">
		<article class="col-10 offset-1 offset-md-0 col-md-4">
			<div id="picProfileWrapper" class="picProfileWrapper">
				<img src="inc/img/profile.png" class="img-thumbnail" alt="Profile Pic"/>
			</div>
		</article>
		<aside class="col-10 offset-1 offset-md-2 col-md-6">
			<div class="figureWrapper" id="profileStats">
				<figure class="displayArea"></figure>
				<figure class="editArea"></figure>
			</div>
		</aside>
	</section>
	<section class="row secBio">
		<article class="col-md-8 offset-md-2">
			<div class="bioWrapper " id="bioWrapper">
				<section class="displayArea"></section>
				<section class="editArea"></section>
			</div>			
		</article>
	</section>
	<section class="row secEditing">
		<article>
			<button type="button" id="btnEdit" class="btn btn-warning float-end">Edit</button>
			<button type="button" id="btnSave" class="btn btn-success float-end d-none">Save</button>
			<button type="button" id="btnCancel" class="btn btn-danger float-end d-none">Cancel</button>

		</article>		
	</section>
	</form>
</main>

<?php include('partials/footer.php'); ?>