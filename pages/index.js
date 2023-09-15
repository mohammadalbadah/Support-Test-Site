import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <main className={styles.main}>
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
        <h1 className={styles.title}>
          Choose your club
        </h1>
        <li className={styles.grid}>
          <Link href={{ pathname: "/products", query: "arsenal" }}>
            <img alt={"Arsenal Icon"} className={styles.icon} src={'https://logos-world.net/wp-content/uploads/2020/05/Arsenal-Logo.png'} />
          </Link>
          <Link href={{ pathname: "/products", query: "barcelona" }}>
            <img alt={"Barcelona Icon"} className={styles.icon} src={'https://logos-world.net/wp-content/uploads/2020/04/Barcelona-Logo.png'} />
          </Link>
          <Link href={{ pathname: "/products", query: "realmadrid" }}>
            <img alt={"Real Madrid Icon"} className={styles.icon} src={'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-symbol.png'} />
          </Link>
        </li>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}