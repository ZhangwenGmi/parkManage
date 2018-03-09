<template lang="html">
    <div class="container-v">
                <div class="container-right-t">
                    <h3>Combination conditions</h3>
                    <el-select class="tableSearchInput" value="Real-time simulation monitoring" placeholder="Please select" size="small">
                        <el-option value='Real-time simulation monitoring'></el-option>
                    </el-select>
                </div>
                <div class="data-mining">
                    <h4>Unified options</h4>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Calculation type:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Calculation object:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Data latitude 1:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Monitoring parameters:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                    <el-select value="Data table type" placeholder="Please select active area" size="small">
                                        <el-option label="Data table type" value="Data table type"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Data latitude 2:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Monitoring parameters:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                    <el-select value="Data table type" placeholder="Please select active area" size="small">
                                        <el-option label="Data table type" value="Data table type"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Data latitude 3:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Monitoring parameters:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select> 
                                    <el-select value="Data table type" placeholder="Please select active area" size="small">
                                        <el-option label="Data table type" value="Data table type"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24"><el-button type="primary" icon="plus" size="small">Add</el-button></el-col>
                    </el-row>
                </div>
                <div class="data-mining">
                    <h4>Device options</h4>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Condition 1:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Attribute item:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                    <el-select value="Object attribute value" placeholder="Please select active area" size="small">
                                        <el-option label="Object attribute value" value="Object attribute value"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Condition 2:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Attribute item:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                    <el-select value="Object attribute value" placeholder="Please select active area" size="small">
                                        <el-option label="Object attribute value" value="Object attribute value"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Condition 3:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="180px">
                                <el-form-item label="Attribute item:">
                                    <el-select value="All" placeholder="Please select active area" size="small">
                                        <el-option label="All" value="All"></el-option>
                                    </el-select>
                                    <el-select value="Object attribute value" placeholder="Please select active area" size="small">
                                        <el-option label="Object attribute value" value="Object attribute value"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24"><el-button type="primary" icon="plus" size="small">Add</el-button></el-col>
                    </el-row>
                </div>
            </div>
</template>
<script>
</script>
<style lang="scss" scoped>

.container-right-t {
    margin: 10px 0 0;
    height: 40px;
    overflow: hidden;
    h3 {
        float: left;
        color: #519fd6;
        margin: 0;
        line-height: 40px;
        font-size: 15px;
        font-weight: 400;
    }
    .tableSearchInput {
        width: 150px;
        margin: 0;
        float: right;
    }
}
.data-mining {
    color: #7f7f7f;
    background: #f7f7f7;
    padding: 10px 20px;
    margin-bottom: 20px;
    h4 {
        color: #7f7f7f;
        height: 30px;
        line-height: 30px;
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 400;
    }
    .el-select {
        width: 150px;
    }
    .el-form-item {
        margin-bottom: 10px;
    }
}
</style>
<script>
export default {
    data() {
            return {
                
            };
        },
        methods: {}
};
</script>