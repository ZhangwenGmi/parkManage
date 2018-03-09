<template lang="html">
    <div class="container-v">
                <div class="container-right-t">
                    <h3>组合条件</h3>
                    <el-select class="tableSearchInput" value="实时仿真监测" placeholder="请选择" size="small">
                        <el-option value='实时仿真监测'></el-option>
                    </el-select>
                </div>
                <div class="data-mining">
                    <h4>统一选项</h4>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="120px">
                                <el-form-item label="计算类型：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="120px">
                                <el-form-item label="计算对象：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="120px">
                                <el-form-item label="数据纬度一：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="120px">
                                <el-form-item label="监测参量：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                    <el-select value="数据表格类型" placeholder="请选择活动区域" size="small">
                                        <el-option label="数据表格类型" value="数据表格类型"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="120px">
                                <el-form-item label="数据纬度二：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="120px">
                                <el-form-item label="监测参量：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                    <el-select value="数据表格类型" placeholder="请选择活动区域" size="small">
                                        <el-option label="数据表格类型" value="数据表格类型"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="120px">
                                <el-form-item label="数据纬度三：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="120px">
                                <el-form-item label="监测参量：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select> 
                                    <el-select value="数据表格类型" placeholder="请选择活动区域" size="small">
                                        <el-option label="数据表格类型" value="数据表格类型"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24"><el-button type="primary" icon="plus" size="small">添加</el-button></el-col>
                    </el-row>
                </div>
                <div class="data-mining">
                    <h4>设备选项</h4>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="100px">
                                <el-form-item label="条件一：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="100px">
                                <el-form-item label="属性项：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                    <el-select value="对象属性值" placeholder="请选择活动区域" size="small">
                                        <el-option label="对象属性值" value="对象属性值"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="100px">
                                <el-form-item label="条件二：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="100px">
                                <el-form-item label="属性项：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                    <el-select value="对象属性值" placeholder="请选择活动区域" size="small">
                                        <el-option label="对象属性值" value="对象属性值"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form ref="form" label-width="100px">
                                <el-form-item label="条件三：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="16">
                            <el-form ref="form" label-width="100px">
                                <el-form-item label="属性项：">
                                    <el-select value="全部" placeholder="请选择活动区域" size="small">
                                        <el-option label="全部" value="全部"></el-option>
                                    </el-select>
                                    <el-select value="对象属性值" placeholder="请选择活动区域" size="small">
                                        <el-option label="对象属性值" value="对象属性值"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24"><el-button type="primary" icon="plus" size="small">添加</el-button></el-col>
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