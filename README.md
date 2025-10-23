# user-input-table
can use tha javascript file to make tables of different type of input columns for the user

EXAMPLE:
<table class="table tablecontain" id="tab1">
        <thead style="position: sticky;top: -1px;z-index: 2;background-color: aliceblue;">
            <tr>
                <th class="select" val="one,two,three">col1</th>
                <th class="date">col2</th>
                <th class="type">col2</th>
                <th class="delete">col3</th>
            </tr>
        </thead>

<tbody></tbody>

<button class="btn" onclick="addRow('tab1')">Add Row</button>

BY PASSING TABLE-ID TO ADDrOW FUNCTION IT WILL CREATE ROWS OF INPUT TYPE MENTIONED IN CLASS
Date-date input
select-option type
delete- delete row button (using class delb delete button can be customised)
number-number input type
else -text input type also can give disabled in class to disable text input

each imput has class inp to customize as needed
