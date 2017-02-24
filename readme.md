tkDropDown v1.0.1
===================


Small jQuery based library which creates customizable dropdowns from unordered lists.

----------


Install
-------------
You can install the package via Bower package manager or available as a Ruby on Rails gem.

**via Bower**
```
bower install tkDropdown
```

**via RubyGem**
Put below code into Gemfile
```
source 'https://rails-assets.org' do
  gem 'rails-assets-tkDropdown'
end
```
Include package in application.js
```
//= require tkDropdown
```

Usage
-------------
Default option values set in the below example.
```javascript
$('ul').tkDropdown({
	id: '', // specify the id attribute to the generated dropdown element in DOM
	caption: true, // hide/show the Dropdown toggle’s label
	captionText: false, // set the Dropdown toggle’s label content (can be string or html element)
	icon: true, // hide/show Dropdown toggle’s icon or chevron
	iconText: '>', // set the Dropdown toggle’s icon content
	activeClass: false, // specify active classname which is from the original ul menu
	toggleMode: false, // specify the click event transition mode on the toggle (options: false, slide, fade)
	toggleClass: 'opened' //  specify the class which added to elements when the menu items are hide or show 
});
```
