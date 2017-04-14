<div class="container">

  <div class="row">
	<div class="small-12 columns">
	  <h2>Sub-Header</h2>
	  <p class="lead">lorem ipsum blah blah blah.</p>
	  <p>lorem ipsum blah blah blah.</p>
	</div>
  </div>

  <form action="" method="post" id="" class=""> <!-- START FORM -->

	<div class="row">
	  <div class="small-12 medium-6 medium-centered columns">
		<label for="npi_number">NPI Number
		  <input type="text" name="npi_number" id="npi-number" class="" placeholder="1134104136" />
		</label>
		<div class="search-helper-text text-center hide">
		  <h3>May We Help?</h3>
		  <p>You're busy saving lives - we get that. So why would we want to waste your precious time having you fill out a form? Simply, enter your NPI number above and we'll do the rest. Although, we are human too, we'll give you the opportunity to double-check the information prior to submitting to our database.</p>
		  <p>-- or --</p>
		  <p>You many <a href=""
						 class="track-click"
						 data-action="click"
						 data-category="data"
						 data-value=""
						 data-label="">
						enter it manually</a>.
		  </p>
		</div>

	  </div>
	</div>

	<div class="hcp-crm-signup-user-credentials"> <!-- START HCP CRM SIGNUP USER CREDS CONTAINER -->
	  <div class="row">
		<div class="small-12 medium-4 columns">
		  <label for="first_name">First Name
			<input type="text" name="first_name" id="" class="" placeholder="" />
		  </label>
		</div>
		<div class="small-12 medium-4 columns">
		  <label for="middle_name">Middle Name
			<input type="text" name="middle_name" id="" class="" placeholder="" />
		  </label>
		</div>
		<div class="small-12 medium-4 columns">
		  <label for="last_name">Last Name
			<input type="text" name="last_name" id="" class="" placeholder="" />
		  </label>
		</div>
	  </div>

	  <div class="row">
		<div class="small-12 medium-6 columns">
		  <label for="address_1">Address 1
			<input type="text" name="address_1" id="" class="" placeholder="" />
		  </label>
		</div>
		<div class="small-12 medium-6 columns">
		  <label for="address_1">Address 2
			<input type="text" name="address_2" id="" class="" placeholder="" />
		  </label>
		</div>
	  </div>

	  <div class="row">
		<div class="small-12 medium-4 columns">
		  <label for="city">City
			<input type="text" name="city" id="" class="" placeholder="" />
		  </label>
		</div>
		<div class="small-12 medium-4 columns">
		  <label for="state">State
			<select id="select-state" name="state">
			  <option value="">Select state</option>
			</select>
		  </label>
		</div>
		<div class="small-12 medium-4 columns">
		  <label for="postal_code">Postal Code
			<input type="text" name="postal_code" id="" class="" placeholder="" />
		  </label>
		</div>
	  </div>

	  <div class="row">
				  <div class="small-12 medium-4 columns">
		  <label for="phone_number">Phone Number
			<input type="text" name="phone_number" id="" class="" placeholder="" />
		  </label>
		</div>
		<div class="small-12 medium-4 columns">
		  <label for="fax_number">Fax Number
			<input type="text" name="fax_number" id="" class="" placeholder="" />
		  </label>
		</div>
		<div class="small-12 medium-4 columns">
		  <label for="email_address">Email Address
			<input type="text" name="email_address" id="" class="" placeholder="" />
		  </label>
		</div>
	  </div>
	</div> <!-- END HCP CRM SIGNUP USER CREDS CONTAINER -->

	<div class="row">
	  <div class="small-12 columns">
		<label for="product_opt_in">
		  <input type="checkbox" name="" id="" class="" value="1" /> Yes, I would like to receive information in the future about <?php echo $this->config->item('brand_name'); ?> and related health information.
		</label>
		<label for="corporate_opt_in">
		  <input type="checkbox" name="" id="" class="" value="1" /> Yes, I would like to receive information in the future about <?php echo $this->config->item('corporate_name'); ?> and the brands they manage.
		</label>
		<p><small><?php echo $this->config->item('corporate_name'); ?> understands that your privacy is important. Please note that by providing your name, address, or other information, you are giving <?php echo $this->config->item('corporate_name'); ?> and companies working with us permission to communicate with you via traditional mail, email, telephone, or text about <?php echo $this->config->item('brand_name'); ?> and other <?php echo $this->config->item('corporate_name'); ?> products, programs, and services. We will not sell or transfer your name, address, or other personally identifiable information about you to any party for its own marketing use. To view the privacy policy, please visit <a href="" class="track-click" data-action="click" data-category="exit" data-value="" data-label="">www.taykrog.com/privacy-legal</a>.</small></p>
	  </div>
	</div>

	<div class="row">
	  <div class="small-12 medium-4 medium-centered columns">
		<button type="submit" class="button sucesss expanded disabled">Sign Up</button>
	  </div>
	</div>

  </form><!-- END FORM -->

</div> <!-- END CONTAINER -->