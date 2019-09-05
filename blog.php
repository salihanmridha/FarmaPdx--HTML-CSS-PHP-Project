
<?php 
	$title = 'Blog | Farma - New Experiences by the Gram';
	include_once('inc/head.php');
?>
		<!-- page-wrapper start -->
		<div class="page-wrapper op">
			
			<!-- header start -->
			<header>
				<!-- navbar start -->
				<?php include_once('inc/navbar.php'); ?>
	            <!-- navbar end -->
			</header>
			<!-- header end -->
			<div class="clr"></div>

			<!-- op-blog start -->
			<div class="op-header op-blog f2">
				<div class="container">
					<div class="row">
						<h1 class="fw-7">blog</h1>
					</div>
				</div>
			</div>
			<!-- op-blog end -->

			<!-- page-content start -->
			<div class="page-content">
				
			<?php include_once('inc/blogHome.php'); ?>
				

			</div>
			<!-- page-content end -->

			<!-- footer start -->
			<?php include_once('inc/footer.php') ?>
			<!-- footer end -->
			
		</div>
		<!-- page-wrapper end -->
<?php 
	include_once('inc/js.php');
?>