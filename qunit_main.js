
requirejs.config({
	paths: {
		jQuery: 'libs/jquery',
		Handlebars: 'libs/handlebars-1.0.0.beta.6',
		HandlebarsHelpers: 'ddl_builder/handlebarsHelpers',
		DateFormat: 'libs/date.format',
		DDLBuilder: 'ddl_builder',
		QUnit: 'libs/qunit-1.10.0'
	},
	
    shim: {
        jQuery: {
			exports: '$'
		},
		Handlebars: {
			exports: 'Handlebars'
		},
		DateFormat: {
			exports: 'dateFormat'
		},
		QUnit: {
			exports: "test"
		}
	}
	
});	

require(["jQuery", "DDLBuilder/qunit/main"], function () {});