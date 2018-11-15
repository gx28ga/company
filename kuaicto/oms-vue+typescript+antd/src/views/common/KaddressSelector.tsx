/**
 *  author : wangcheng
 *  createTime 2018-11-13
 *  description : 省市区 级联选择器
 */
import {Component, Prop, Watch, Emit, Vue} from "vue-property-decorator";
import {Api} from '@/api/Api';
import {PROVINCESAPI} from '@/api/urls/address/Address';
import {CITYAPI} from '@/api/urls/address/Address';
import {COUNTYAPI} from '@/api/urls/address/Address';

@Component
export class KaddressSelector extends Vue {
    @Prop({ default: []}) private geoTree!: any[];
    @Prop({ default: []}) private selectedGeoOptions!: any[];
    private props: ['provinceId', 'cityId', 'countyId'];

    private created() {
        let self: any = this;
        if (self.provinceId) {
            self.selectedGeoOptions = [self.provinceId, self.cityId, self.countyId];
        }
        Api.find(PROVINCESAPI.PROVINCES, {parentCode: 1}).then((res: any) => {
            res.forEach((item: any) => {
                item.children = [];
            });
            self.geoTree = res;
            self.getAdress();
        });
    }

    private getAdress() {
        let selectedGeoOptions: any = [];
        let self: any = this;
        if (self.provinceId) {
            selectedGeoOptions.push(self.provinceId);

            let selected = self.geoTree.find((item: any) => item.code === self.provinceId);
            Api.find(CITYAPI.CITY, {parentCode: self.provinceId}).then( (cityItems: any) => {
                cityItems.forEach((item: any) => {
                    item.children = [];
                });

                selected.children = cityItems;

                if (self.cityId) {
                    selectedGeoOptions.push(self.cityId);

                    selected = selected.children.find((item: any) => item.code === self.cityId);

                    Api.find(COUNTYAPI.COUNTY, { parentCode: self.cityId}).then((countyItems: any) => {
                        selected.children = countyItems;
                        if (self.countyId) {
                            selectedGeoOptions.push(self.countyId);
                            self.selectedGeoOptions = selectedGeoOptions;
                        }
                    });
                }
            });
        }
    }
    private handleGeoItemChange( val: any) {
        let selected = this.geoTree.find((item: any) => item.code === val[0]);
        if (val.length === 1) {  // list city
            Api.find(CITYAPI.CITY, {parentCode: selected.code}).then((res: any) => {
                res.forEach((item: any) => {
                    item.children = [];
                });
                selected.children = res;
            });
        }
        if (val.length === 2) { // list county
            selected = selected.children.find((item: any) => item.code === val[1]);
            Api.find(COUNTYAPI.COUNTY, {parentCode: selected.code}).then((res: any) => {
                selected.children = res;
            });
        }
    }
    private addressSelect( value: any) {
        let self: any = this;
        let result: any = {};
        let arr = JSON.parse(JSON.stringify(self.geoTree));
        let selectedGeoOptions = JSON.parse(JSON.stringify(self.selectedGeoOptions));

        // 省
        if (selectedGeoOptions.length > 0) {
            let code = selectedGeoOptions.shift();
            let selected = arr.find((item: any) => item.code === code);
            arr = selected.children;

            result.provinceId = selected.code;
            result.provinceName = selected.name;
        }
        // 市
        if (selectedGeoOptions.length > 0) {
            let code = selectedGeoOptions.shift();
            let selected = arr.find((item: any) => item.code === code);
            arr = selected.children;

            result.cityId = selected.code;
            result.cityName = selected.name;
        }
        // 区
        if (selectedGeoOptions.length > 0) {
            let code = selectedGeoOptions.shift();
            let selected = arr.find((item: any) => item.code === code);
            arr = selected.children;

            result.countyId = selected.code;
            result.countyName = selected.name;
        }
        self.$emit("address", result);
    }
    private render() {
        return (
            <div>
                <a-cascader
                    options = {this.geoTree}
                    onchange = {this.addressSelect}
                    loadData = {this.handleGeoItemChange}
                    value = {this.selectedGeoOptions}
                    changeOnSelect
                    placeholder="请选择省市区"
                    />
            </div>
        );
    }
}
Vue.component("k-addressSelector", KaddressSelector);