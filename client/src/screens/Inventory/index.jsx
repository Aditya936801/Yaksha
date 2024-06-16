import FilterDataSheet from "../../components/FilterDataSheet/FilterDataSheet"
import AverageMSRP from "./AverageMSRP"
import InventoryCount from "./InventoryCount"
import RecentData from "./RecentData"

const Inventory = () => {
  return (
    <div>
        <RecentData />
        <InventoryCount />
        <AverageMSRP />
        <FilterDataSheet />
    </div>
  )
}

export default Inventory