<template>
  <div>
    <el-card class="box-card">
      <h3>活动列表</h3>
      <el-row type="flex" align="middle" :gutter="20" style="padding:20px;">
        <el-col :span="5">
          已选择0个活动
        </el-col>
        <el-col :span="5">
          <el-select v-model="currentType" placeholder="请选择">
            <el-option
              v-for="type in types"
              :value="type">
            </el-option>
          </el-select>

        </el-col>
        <el-col :span="13">
          <el-button type="danger" :plain="true" @click="removeConfirm">删除</el-button>
          <el-button type="info" :plain="true">置顶</el-button>
          <el-button type="info" :plain="true">复制</el-button>
        </el-col>

      </el-row>
      <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="selectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column property="title" label="活动名称"></el-table-column>
        <el-table-column property="type" label="活动类型"></el-table-column>
        <el-table-column property="status" label="活动状态"></el-table-column>
        <el-table-column property="readNum" label="浏览数"></el-table-column>
        <el-table-column property="signUpNum" label="报名数"></el-table-column>
        <el-table-column property="auditNum" label="待审核"></el-table-column>
        <el-table-column property="id" label="操作">
          <el-button>默认按钮</el-button>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog
      title="提示"
      :visible="dialogVisible"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleRemove">确 定</el-button>
      </span>
    </el-dialog>

  </div>  


</template>
<script>
import axios from 'axios'
export default  {
  name:"",
  data () {
    return {
      tableData:[],
      dialogVisible:false,
      currentType:'全部',
      types:['全部','测试活动','免费活动','收费活动'],
      selectItems:[]
    }
  },
  
  created(){
    //var _this = this
    axios.get("/static/json/test.json").then((response)=>{
      this.tableData = response.data.list;
      console.log(response.data.list);
    }).catch(function(err){
      console.log(err);
    });
  },
  methods:{
    removeConfirm:function(){
      this.dialogVisible = true;
    },
    selectionChange:function(val){
      //我们要获取的是已经选中的全部
      var arr = [];
      val.forEach(function(item){
        arr.push(item);
      });
      this.selectItems = arr;//拿到选中的值
      console.log(this.selectItems);
    },
    handleRemove:function(){
      console.log("Hai");
      //数据和已经选择的数据做对比，然后选择删除
      var tableData = this.tableData;
      //这里建议使用indexOf
      this.selectItems.forEach(function(id){
        tableData.forEach(function(data){
            console.log(data);
            console.log(id);
            console.log("Haiiii");
            if(id.id == data.id){
              tableData.splice(tableData.indexOf(data),1);
            }
        });
      });
        this.selectItems = [];
        this.dialogVisible = false;
    }
  }
}



</script>
<style>
  .allActive > .head > .el-col > .el-col {
    padding: 20px 0;
    border-right: solid 1px #fff;
  }

  .allActive .head {
    text-align: center;
    color: #fff;
    font-size: 30px;
    margin-bottom: 50px;
  }

  .allActive .head span {
    font-size: 16px;
  }
</style>
