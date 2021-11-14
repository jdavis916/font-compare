<?php include('partials/header.php'); ?>
<?php 
	$arr = array(
		'name' => 'Jason',
		'state' => 'CA'
	);
?>

<main class="container pgHome" id="pgHome">
	<section class="row">
			
	</section>
	<section class="row" id="paraArea">
		<div class="col-12 paraWrapper">
			<section class="row">
				<article class="col-12 col-md-8">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</article>
				<aside class="col-12 col-md-4">
					<input type="text" name="myFont" id="myFont" /><br/>
					<button type="button" class="btn btnFont" id="btnFont">Update</button>
				</aside>
       <!-- <aside class="col-12 col-md-4">
          <input type="text" name="" /><br/>
          <button type="button" class="btn btn-primary btnUpdate">Update</button>
        </aside>-->
			</section>
		</div>
	</section>
	<section class="row">
		<div col-12>
			<button type="button" id="btnAdd" class="btn btn-info btnAdd"><i class="fas fa-plus-circle"></i></button>
		</div>
		<div col-12>
			<button type="button" class="btn btn-success btnSave">Save Fonts</button>
		</div>
	</section>
</main>

<?php include('partials/footer.php');?>