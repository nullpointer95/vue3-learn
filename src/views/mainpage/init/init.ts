import getBottomData, {NameEnum} from "./InitBottomNavigationData"
import {ShowTypeEnum} from "@/components/navigation/navigationEnum";



export default function () {
    const bottomData = getBottomData();

    return {
        enums: {
            ShowTypeEnum,
            NameEnum
        },
        datas: {
            ...bottomData.data
        },
        methods: {
            ...bottomData.methods
        }
    }
}
