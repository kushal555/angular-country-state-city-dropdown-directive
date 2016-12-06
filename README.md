# angular-country-state-city-dropdown-directive
In this project i create directive for Country, State and City Dropdown. If you need to integrate them in your form, just need to put the directive name there.

How to integrate :-
1. Please import the country, state and city sql files in your database. Which you will find in `api/sql` directory.
2. Now put short code in your HTML for draw dropdown of Country, state and City:- 
            
            <my-country class="form-control" resource="api/country.php" ng-model="country_id"></my-country>
            <my-state ng-model="state_id" resource="api/state.php" class="form-control"></my-state>
            <my-city ng-model="city_id" resource="api/city.php" class="form-control"></my-city>
            
  here two one thing must same that is **ng-model** because `ng-model` is using in directive, So please maintaine both same. If you want to change then you also need to make change in directive file which you will find  `common/directives/countryStateCityDirective.js`.
