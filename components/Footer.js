const Footer = () => {
    return (
        <footer>
            {/**Test Ticket */}
        <h1 className={styles.title}>
         Test SUP-12507
        </h1>
            <select data-cs-mask id="account" name="accountList" ng-model="model.accountSelected" 
            ng-change="accountChange(makeTransferForm, model.accountSelected, 'COMPONENT_MAKE_TRANSFER_FROM')" 
            ng-options="(item.alias || item.name) + ' ('+item.sortCode + ', ' + item.accountNumber + ')' for item in accountList track by item.accountNumber" 
            class="form-control ng-untouched ng-valid ng-valid-required ng-dirty ng-valid-parse ng-valid-empty-select" required="" data-cs-hover="">
                <option disabled="" 
            translate="COMPONENT_MAKE_TRANSFER_PLEASE_SELECT" class="" selected="selected" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Classic Plus Account (771003, 35202068)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Fixed Rate Cash ISA 3 year (771003, 00042188)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Fixed Rate Cash ISA 3 year (771003, 00065272)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Easy Saver (771003, 00044593)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Matured Funds (771003, 00044618)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Easy Saver (771003, 36505360)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            </select>
          {/******************************** */}
          <br><br></br></br>
          <select id="account" name="accountList" ng-model="model.accountSelected" 
            ng-change="accountChange(makeTransferForm, model.accountSelected, 'COMPONENT_MAKE_TRANSFER_FROM')" 
            ng-options="(item.alias || item.name) + ' ('+item.sortCode + ', ' + item.accountNumber + ')' for item in accountList track by item.accountNumber" 
            class="form-control ng-untouched ng-valid ng-valid-required ng-dirty ng-valid-parse ng-valid-empty-select" required="" data-cs-hover="">
                <option disabled="" 
            translate="COMPONENT_MAKE_TRANSFER_PLEASE_SELECT" class="" selected="selected" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Classic Plus Account (771003, 35202068)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Fixed Rate Cash ISA 3 year (771003, 00042188)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Fixed Rate Cash ISA 3 year (771003, 00065272)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Easy Saver (771003, 00044593)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Matured Funds (771003, 00044618)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            <option label="Easy Saver (771003, 36505360)" style="width: 0px !important; height: 0px !important;" data-cs-mask=""></option>
            </select>
            <br><br></br></br>

          {/********************************/}
            Support Test Site 2023
        </footer>
    );
}

export default Footer;