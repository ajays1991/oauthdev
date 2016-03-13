<!DOCTYPE html>
<html>
    <head>
        <title>OAuth</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="title">OAuth Login </div>
                <div class="form col-md-12 center-block">
					<div>
						{{ Form::text('email', Input::old('email'), array('placeholder' => 'Email', 'class'=> 'form-control')) }}
					</div>
					<div>
						{{ Form::password('password',  array('placeholder' => 'Password', 'class'=> 'form-control')) }}
					</div>
					<div>
						<button type="submit">Sign In</button>
						<!-- <span class="pull-right"><a href="#">Register</a></span><span><a href="#">Need help?</a></span> -->
					</div>
				</div>
            </div>
        </div>
    </body>
</html>
