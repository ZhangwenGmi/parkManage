
import container from './components/common/Container'//物业服务主体容器
import containerEN from './components/common/ContainerEN'//物业服务主体容器
import superviseContainer from './components/supervise/superviseContainer'//综合监管主体容器
import superviseContainerEN from './components/supervise/superviseContainerEN'//综合监管主体容器
import inventory from './pages/storeManage/inventory'
import doorControl from './pages/doorForbidManage/doorControl'
import visitorManage from './pages/doorForbidManage/visitorManage'
import userManages from './pages/systemManage/userManages'
import authorManage from './pages/systemManage/authorManage'
import logManage from './pages/systemManage/logManage'
import businessManage from './pages/logisticsManage/businessManage'//会务管理

import inventoryEN from './pagesEN/storeManage/inventory'
import doorControlEN from './pagesEN/doorForbidManage/doorControl'
import visitorManageEN from './pagesEN/doorForbidManage/visitorManage'
import userManagesEN from './pagesEN/systemManage/userManages'
import authorManageEN from './pagesEN/systemManage/authorManage'
import logManageEN from './pagesEN/systemManage/logManage'
import businessManageEN from './pagesEN/logisticsManage/businessManage'//会务管理EN

import operationMonitoring from './pages/supervise/subLayout/operationMonitoring' //运行监测分项树形菜单
import facilitiesItem from './pages/supervise/subLayout/facilitiesItem' //信息发布设施分项筛选树形菜单
import facilitiesItemPublic from './pages/supervise/subLayout/facilitiesItemPublic' //市政设施分项筛选树形菜单
import resourceClassify from './pages/supervise/subLayout/resourceClassify' //资源分内树形菜单
import monitoringArea from './pages/supervise/subLayout/monitoringArea' //监控区域树形菜单
import programTopLayout from './pages/supervise/subLayout/programTopLayout' //信息发布子页面头部tab标签

import operationMonitoringEN from './pagesEN/supervise/subLayout/operationMonitoring' //运行监测分项树形菜单
import facilitiesItemEN from './pagesEN/supervise/subLayout/facilitiesItem' //信息发布设施分项筛选树形菜单
import facilitiesItemPublicEN from './pagesEN/supervise/subLayout/facilitiesItemPublic' //市政设施分项筛选树形菜单
import resourceClassifyEN from './pagesEN/supervise/subLayout/resourceClassify' //资源分内树形菜单
import monitoringAreaEN from './pagesEN/supervise/subLayout/monitoringArea' //监控区域树形菜单
import programTopLayoutEN from './pagesEN/supervise/subLayout/programTopLayout' //信息发布子页面头部tab标签


export default [
  //主控台
  {
    path: '/',
    component: resolve => require(['./pages/home/home.vue'], resolve)
  },
  //客服服务
  {
    path: '/customService',
    component: container,
    name:'客服服务',
    redirect: '/customService/analysis',
    children:[
      {
        path: '/customService/analysis',
        component: resolve => require(['./pages/customService/analysis.vue'], resolve),
      },
      {
        path: '/customService/knowledge',
        component: resolve => require(['./pages/customService/knowledge.vue'], resolve),
      },
      {
        path: '/customService/qualityInspection',
        component: resolve => require(['./pages/customService/qualityInspection.vue'], resolve),
      },
      {
        path: '/customService/serviceMange',
        component: resolve => require(['./pages/customService/serviceMange.vue'], resolve),
      },
      {
        path: '/customService/serviceOnline',
        component: resolve => require(['./pages/customService/serviceOnline.vue'], resolve),
      }
    ]
  },
  //设备设施
  {
    path: '/equipment',
    component: container,
    name:'设备设施',
    redirect: '/equipment/referenceStandard',
    children:[
      {
        path: '/equipment/equipmentLedger',
        component: resolve => require(['./pages/equipment/equipmentLedger.vue'], resolve),
      },
      {
        path: '/equipment/patrolManage',
        component: resolve => require(['./pages/equipment/patrolManage.vue'], resolve),
      },
      {
        path: '/equipment/referenceStandard',
        component: resolve => require(['./pages/equipment/referenceStandard.vue'], resolve),
      },
      {
        path: '/equipment/taskList',
        component: resolve => require(['./pages/equipment/taskList.vue'], resolve),
      }
    ]
  },
  //供应商管理
  {
    path: '/supplierManage',
    component: container,
    name:'供应商管理',
    redirect: '/supplierManage/supplierInfo',
    children:[
      {
        path: '/supplierManage/supplierAccess',
        component: resolve => require(['./pages/supplierManage/supplierAccess.vue'], resolve)
      },
      {
        path: '/supplierManage/supplierInfo',
		    component: resolve => require(['./pages/supplierManage/supplierInfo.vue'], resolve),
        redirect:'/supplierManage/supplierInfo/supplierList',
        children:[
        	{
		        path: '/supplierManage/supplierInfo/supplierList',
		        component: resolve => require(['./pages/supplierManage/supplierList.vue'], resolve)
		      },
		      {
		        path: '/supplierManage/supplierInfo/supplierInfoDetail',
		        component: resolve => require(['./pages/supplierManage/supplierInfoDetail.vue'], resolve)
		      }
        ]
      },
      
    ]
  },
  
  //仓库管理
   {
    path: '/storeManage',
    component: container,
    name:'仓库管理',
    redirect: '/storeManage/baseInfo',
    children:[
      {
        path: '/storeManage/baseInfo',
        component: resolve => require(['./pages/storeManage/baseInfo.vue'], resolve)
      },
      {
        path: '/storeManage/inventory',
        component: inventory,
        redirect:'/storeManage/inventory/inventoryQuery',
        children:[
        	{
        		path:'/storeManage/inventory/inventoryCheck',
        		component:resolve => require(['./pages/storeManage/inventoryCheck.vue'], resolve)
        	},
        	{
		        path: '/storeManage/inventory/inventoryQuery',
		        component: resolve => require(['./pages/storeManage/inventoryQuery.vue'], resolve)
		      }
        ]
      },
      {
        path: '/storeManage/systemMaintenance',
        component: resolve => require(['./pages/storeManage/systemMaintenance.vue'], resolve)
      },
      {
        path: '/storeManage/warehousingManage',
        component: resolve => require(['./pages/storeManage/warehousingManage.vue'], resolve)
      },
      {
        path: '/storeManage/warehousingManageDetail',
        component: resolve => require(['./pages/storeManage/warehousingManageDetail.vue'], resolve)
      }
    ]
  },
  //合同管理
  {
    path: '/contractManage',
    component: container,
    name:'合同管理',
    redirect: '/contractManage/onlineContract',
    children:[
      {
        path: '/contractManage/onlineContract',
        component: resolve => require(['./pages/contractManage/onlineContract.vue'], resolve)
      },
      {
        path: '/contractManage/contractReview',
        component: resolve => require(['./pages/contractManage/contractReview.vue'], resolve)
      },
      {
        path: '/contractManage/contractTemplate',
        component: resolve => require(['./pages/contractManage/contractTemplate.vue'], resolve)
      }
    ]
  },
  //门禁管理
  {
    path: '/doorForbidManage',
    component: container,
    name:'门禁管理',
    redirect: '/doorForbidManage/doorControl',//doorControl
    children:[
    	{
        path: '/doorForbidManage/doorControl',
        component: doorControl,
        redirect:'/doorForbidManage/doorControl/regionalDivision',
        children:[
        	{
		        path: '/doorForbidManage/doorControl/regionalDivision',
		        component: resolve => require(['./pages/doorForbidManage/regionalDivision.vue'], resolve)
		      },
		      {
		        path: '/doorForbidManage/doorControl/faceEquipment',
		        component: resolve => require(['./pages/doorForbidManage/faceEquipment.vue'], resolve)
		      },
		      {
		        path: '/doorForbidManage/doorControl/QRCode',
		        component: resolve => require(['./pages/doorForbidManage/QRCode.vue'], resolve)
		      },
		      
        ]
      },
      {
        path: '/doorForbidManage/visitorManage',
        component: visitorManage,
        redirect:'/doorForbidManage/visitorManage/visitorAnalysis',
        children:[
        	{
		        path: '/doorForbidManage/visitorManage/QRCodeStatistics',
		        component: resolve => require(['./pages/doorForbidManage/QRCodeStatistics.vue'], resolve)
		      },
		      {
		        path: '/doorForbidManage/visitorManage/visitorAnalysis',
		        component: resolve => require(['./pages/doorForbidManage/visitorAnalysis.vue'], resolve)
		      },
		      {
		        path: '/doorForbidManage/visitorManage/visitorInfo',
		        component: resolve => require(['./pages/doorForbidManage/visitorInfo.vue'], resolve)
		      }
        ]
      },
      {
        path: '/doorForbidManage/operationLog',
        component: resolve => require(['./pages/doorForbidManage/operationLog.vue'], resolve)
      },
      
    ]
  },
  //计划管理
  {
    path: '/planManage',
    component: container,
    name:'计划管理',
    redirect: '/planManage/alanningStatistics',
    children:[
      {
        path: '/planManage/alanningStatistics',
        component: resolve => require(['./pages/planManage/alanningStatistics.vue'], resolve)
      },
      {
        path: '/planManage/planFeedback',
        component: resolve => require(['./pages/planManage/planFeedback.vue'], resolve)
      },
      {
        path: '/planManage/plansList',
        component: resolve => require(['./pages/planManage/plansList.vue'], resolve)
      }
    ]
  },
  //品质管理
  {
    path: '/qualityManage',
    component: container,
    name:'品质管理',
    redirect: '/qualityManage/typeManage',
    children:[
      {
        path: '/qualityManage/typeManage',
        component: resolve => require(['./pages/qualityManage/typeManage.vue'], resolve)
      },
      {
        path: '/qualityManage/standardApproval',
        component: resolve => require(['./pages/qualityManage/standardApproval.vue'], resolve)
      },
      {
        path: '/qualityManage/standardManage',
        component: resolve => require(['./pages/qualityManage/standardManage.vue'], resolve)
      },
      {
        path: '/qualityManage/normManage',
        component: resolve => require(['./pages/qualityManage/normManage.vue'], resolve)
      }
    ]
  },
  //采购管理
  {
    path: '/purchasingManage',
    component: container,
    name:'采购管理',
    redirect: '/purchasingManage/purchasingRequisition',
    children:[
      {
        path: '/purchasingManage/purchasingRequisition',
        component: resolve => require(['./pages/purchasingManage/purchasingRequisition.vue'], resolve)
      },
      {
        path: '/purchasingManage/purchaseOrder',
        component: resolve => require(['./pages/purchasingManage/purchaseOrder.vue'], resolve)
      },
      {
        path: '/purchasingManage/statisticalAnalysis',
        component: resolve => require(['./pages/purchasingManage/statisticalAnalysis.vue'], resolve)
      }
    ]
  },
  //预算管理
  {
    path: '/budgetManage',
    component: container,
    name:'预算管理',
    redirect: '/budgetManage/budgetAnalysis',
    children:[
      {
        path: '/budgetManage/budgetAnalysis',
        component: resolve => require(['./pages/budgetManage/budgetAnalysis.vue'], resolve)
      }
    ]
  },
  //车辆管理
  {
    path: '/vehicleManage',
    component: container,
    name:'车辆管理',
    redirect: '/vehicleManage/yardInformation',
    children:[
      {
        path: '/vehicleManage/yardInformation',
        component: resolve => require(['./pages/vehicleManage/yardInformation.vue'], resolve)
      },
      {
        path: '/vehicleManage/vehicleInformation',
        component: resolve => require(['./pages/vehicleManage/vehicleInformation.vue'], resolve)
      }
    ]
  },
  //后勤管理
  {
    path: '/logisticsManage',
    component: container,
    name:'后勤管理',
    redirect: '/logisticsManage/serviceAnnouncement',
    children:[
      {
        path: '/logisticsManage/serviceAnnouncement',
        component: resolve => require(['./pages/logisticsManage/serviceAnnouncement.vue'], resolve)
      },
      {
        path: '/logisticsManage/communication',
        component: resolve => require(['./pages/logisticsManage/communication.vue'], resolve)
      },
      
      {
        path: '/logisticsManage/restaurantManage',
        component: resolve => require(['./pages/logisticsManage/restaurantManage.vue'], resolve)
      },//businessManage
      {
        path: '/logisticsManage/vehicleManage',
        component: resolve => require(['./pages/logisticsManage/vehicleManage.vue'], resolve)
      },
      {
        path: '/logisticsManage/businessManage',
        component: businessManage,
        redirect:'/logisticsManage/businessManage/conferenceManage',
        children:[
        	{
		        path: '/logisticsManage/businessManage/conferenceManage',
		        component: resolve => require(['./pages/logisticsManage/conferenceManage.vue'], resolve)
		      },
		      {
		        path: '/logisticsManage/businessManage/myMeeting',
		        component: resolve => require(['./pages/logisticsManage/myMeeting.vue'], resolve)
		      }
        ]
      }
      
    ]
  },
  //系统管理
  {
    path: '/systemManage',
    component: container,
    name:'系统管理',
    redirect: '/systemManage/userManages',
    children:[
    	//logManage
    	{
        path: '/systemManage/logManage',
        component: logManage,
        redirect:'/systemManage/logManage/operationLog',
        children:[
        	{
		        path: '/systemManage/logManage/operationLog',
		        component: resolve => require(['./pages/systemManage/operationLog.vue'], resolve)
		      },
        	{
		        path: '/systemManage/logManage/loginLog',
		        component: resolve => require(['./pages/systemManage/loginLog.vue'], resolve)
		      }
        ]
      },
      {
        path: '/systemManage/userManages',
        component:userManages,
        redirect:'/systemManage/userManages/organizationalStructure',
				children:[
					{
		        path: '/systemManage/userManages/organizationalStructure',
		        component: resolve => require(['./pages/systemManage/organizationalStructure.vue'], resolve)
		      },
		      {
		        path: '/systemManage/userManages/basicInformation',
		        component: resolve => require(['./pages/systemManage/basicInformation.vue'], resolve)
		      }
		      
				]
      },//
      {
        path: '/systemManage/authorManage',
        component: authorManage,
        redirect: '/systemManage/authorManage/roleManage',
        children:[
        	{
		        path: '/systemManage/authorManage/roleManage',
		        component: resolve => require(['./pages/systemManage/roleManage.vue'], resolve)
		      },
		      {
		        path: '/systemManage/authorManage/userManage',
		        component: resolve => require(['./pages/systemManage/userManage.vue'], resolve)
		      }
        ]
      },
      {
        path: '/systemManage/configManage',
        component: resolve => require(['./pages/systemManage/configManage.vue'], resolve)
      }
    ]
  },
  //综合监管
  {
    path: '/supervise',
    component: superviseContainer,
    name:'综合监管',
    redirect: '/supervise/building',
    children:[
      //建筑群
      {
        path: '/supervise/building',
        component: operationMonitoring,
        name: '建筑群',
        redirect:'/supervise/building',
        children:[
          {
            path: '/supervise/building',
            component: resolve => require(['./pages/supervise/building.vue'], resolve)
          },
          {
            path: '/supervise/building/powerconsumption',
            component: resolve => require(['./pages/supervise/powerconsumption.vue'], resolve)
          },
          {
            path: '/supervise/building/powerStation',
            component: resolve => require(['./pages/supervise/powerStation.vue'], resolve)
          }
        ]
      },
      //园区安防
      {
        path: '/supervise/parkSecurity',
        redirect: '/supervise/parkSecurity',
        component: monitoringArea,
        name: '园区安防',
        children:[
          {
            path: '/supervise/parkSecurity',
            component: resolve => require(['./pages/supervise/parkSecurity.vue'], resolve)
          },
          {
            path: '/supervise/parkSecurityDetail',
            component: resolve => require(['./pages/supervise/parkSecurityDetail.vue'], resolve)
          },
        ]
      },
      //生态环境
      {
        path: '/supervise/environment',
        name: '生态环境',
        component: resolve => require(['./pages/supervise/environment.vue'], resolve)
      },
      //市政设施
      {
        path: '/supervise/facilities',
        redirect:'/supervise/facilities',
        component: facilitiesItemPublic,
        name: '市政设施',
        children:[
          {
            path: '/supervise/facilities',
            component: resolve => require(['./pages/supervise/facilities.vue'], resolve)
          }
        ]
      },
      //动静交通
      {
        path: '/supervise/traffic',
        name: '动静交通',
        component: resolve => require(['./pages/supervise/traffic.vue'], resolve)
      },
      //信息发布
      {
        path: '/supervise/information/infoList',
        component: facilitiesItem,
        name: '信息发布',
        redirect:'/supervise/information/infoList',
        children:[
          {
            path:'',
            component: programTopLayout,
            redirect: '/supervise/information/infoList',
             children:[
              {
                path: '/supervise/information/infoList',
                component: resolve => require(['./pages/supervise/infoList.vue'], resolve)
              },
              {
                path: '/supervise/information/programInfo',
                component: resolve => require(['./pages/supervise/programInfo.vue'], resolve)
              },
              {
                path: '/supervise/information/taskRelease',
                component: resolve => require(['./pages/supervise/taskRelease.vue'], resolve)
              }
            ]
          }
        ]
      },
      //资源管理
      {
        path: '/supervise/resourceManage',
        redirect:'/supervise/resourceManage',
        component: resourceClassify,
        name: '资源管理',
        children:[
          {
            path: '/supervise/resourceManage',
            component: resolve => require(['./pages/supervise/resourceManage.vue'], resolve)
          }
        ]
      },
      //设施点检
      {
        path: '/supervise/facilitiesInspection',
        redirect:'/supervise/facilitiesInspection',
        component: resourceClassify,
        name: '设施点检',
        children:[
          {
            path: '/supervise/facilitiesInspection',
            component: resolve => require(['./pages/supervise/facilitiesInspection.vue'], resolve)
          }
        ]
      },
      //数据挖掘
      {
        path: '/supervise/dataMining',
        redirect:'/supervise/dataMining',
        component: resourceClassify,
        name: '数据挖掘',
        children:[
          {
            path: '/supervise/dataMining',
            component: resolve => require(['./pages/supervise/dataMining.vue'], resolve)
          }
        ]
      },
      //控制中心
      {
        path: '/supervise/controls',
        name: '控制中心',
        component: resolve => require(['./pages/supervise/controls.vue'], resolve)
      },
      //报警中心
      {
        path: '/supervise/alarm',
        name: '报警中心',
        component: resolve => require(['./pages/supervise/alarm.vue'], resolve)
      },
      //工作流引擎
      {
        path: '/supervise/workflow',
        name: '工作流引擎',
        component: resolve => require(['./pages/supervise/workflow.vue'], resolve)
      }
    ]
  },
  //综合展示
  {
    path: '/exhibition',
    component: resolve => require(['./pages/exhibition/exhibition.vue'], resolve)
  },
  //综合展示
  {
    path: '/EN/exhibition',
    component: resolve => require(['./pagesEN/exhibition/exhibition.vue'], resolve)
  },

/*===============================英文版路由========================================*/

  //主控台
  {
    path: '/EN',
    component: resolve => require(['./pagesEN/home/home.vue'], resolve)
  },
  //客服服务
  {
    path: '/EN/customService',
    component: containerEN,
    name:'',
    redirect: '/EN/customService/analysis',
    children:[
      {
        path: '/EN/customService/analysis',
        component: resolve => require(['./pagesEN/customService/analysis.vue'], resolve),
      },
      {
        path: '/EN/customService/knowledge',
        component: resolve => require(['./pagesEN/customService/knowledge.vue'], resolve),
      },
      {
        path: '/EN/customService/qualityInspection',
        component: resolve => require(['./pagesEN/customService/qualityInspection.vue'], resolve),
      },
      {
        path: '/EN/customService/serviceMange',
        component: resolve => require(['./pagesEN/customService/serviceMange.vue'], resolve),
      },
      {
        path: '/EN/customService/serviceOnline',
        component: resolve => require(['./pagesEN/customService/serviceOnline.vue'], resolve),
      }
    ]
  },
  //设备设施
  {
    path: '/EN/equipment',
    component: containerEN,
    name:'',
    redirect: '/EN/equipment/referenceStandard',
    children:[
      {
        path: '/EN/equipment/equipmentLedger',
        component: resolve => require(['./pagesEN/equipment/equipmentLedger.vue'], resolve),
      },
      {
        path: '/EN/equipment/patrolManage',
        component: resolve => require(['./pagesEN/equipment/patrolManage.vue'], resolve),
      },
      {
        path: '/EN/equipment/referenceStandard',
        component: resolve => require(['./pagesEN/equipment/referenceStandard.vue'], resolve),
      },
      {
        path: '/EN/equipment/taskList',
        component: resolve => require(['./pagesEN/equipment/taskList.vue'], resolve),
      }
    ]
  },
  //供应商管理
  {
    path: '/EN/supplierManage',
    component: containerEN,
    name:'',
    redirect: '/EN/supplierManage/supplierInfo',
    children:[
      {
        path: '/EN/supplierManage/supplierAccess',
        component: resolve => require(['./pagesEN/supplierManage/supplierAccess.vue'], resolve)
      },
      {
        path: '/EN/supplierManage/supplierInfo',
        component: resolve => require(['./pagesEN/supplierManage/supplierInfo.vue'], resolve),
        redirect: '/EN/supplierManage/supplierInfo/supplierList',
        children:[
          {
            path: '/EN/supplierManage/supplierInfo/supplierList',
            component: resolve => require(['./pagesEN/supplierManage/supplierList.vue'], resolve)
          },
          {
            path: '/EN/supplierManage/supplierInfo/supplierInfoDetail',
            component: resolve => require(['./pagesEN/supplierManage/supplierInfoDetail.vue'], resolve)
          }
        ]
      },
      
    ]
  },
  
  //仓库管理
   {
    path: '/EN/storeManage',
    component: containerEN,
    name:'',
    redirect: '/EN/storeManage/baseInfo',
    children:[
      {
        path: '/EN/storeManage/baseInfo',
        component: resolve => require(['./pagesEN/storeManage/baseInfo.vue'], resolve)
      },
      {
        path: '/EN/storeManage/inventory',
        component: inventoryEN,
        redirect: '/EN/storeManage/inventory/inventoryQuery',
        children:[
          {
            path: '/EN/storeManage/inventory/inventoryCheck',
            component:resolve => require(['./pagesEN/storeManage/inventoryCheck.vue'], resolve)
          },
          {
            path: '/EN/storeManage/inventory/inventoryQuery',
            component: resolve => require(['./pagesEN/storeManage/inventoryQuery.vue'], resolve)
          }
        ]
      },
      {
        path: '/EN/storeManage/systemMaintenance',
        component: resolve => require(['./pagesEN/storeManage/systemMaintenance.vue'], resolve)
      },
      {
        path: '/EN/storeManage/warehousingManage',
        component: resolve => require(['./pagesEN/storeManage/warehousingManage.vue'], resolve)
      },
      {
        path: '/EN/storeManage/warehousingManageDetail',
        component: resolve => require(['./pagesEN/storeManage/warehousingManageDetail.vue'], resolve)
      }
    ]
  },
  //合同管理
  {
    path: '/EN/contractManage',
    component: containerEN,
    name:'',
    redirect: '/EN/contractManage/onlineContract',
    children:[
      {
        path: '/EN/contractManage/onlineContract',
        component: resolve => require(['./pagesEN/contractManage/onlineContract.vue'], resolve)
      },
      {
        path: '/EN/contractManage/contractReview',
        component: resolve => require(['./pagesEN/contractManage/contractReview.vue'], resolve)
      },
      {
        path: '/EN/contractManage/contractTemplate',
        component: resolve => require(['./pagesEN/contractManage/contractTemplate.vue'], resolve)
      }
    ]
  },
  //门禁管理
  {
    path: '/EN/doorForbidManage',
    component: containerEN,
    name:'',
    redirect: '/EN/doorForbidManage/doorControl',//doorControl
    children:[
      {
        path: '/EN/doorForbidManage/doorControl',
        component: doorControlEN,
        redirect: '/EN/doorForbidManage/doorControl/regionalDivision',
        children:[
          {
            path: '/EN/doorForbidManage/doorControl/regionalDivision',
            component: resolve => require(['./pagesEN/doorForbidManage/regionalDivision.vue'], resolve)
          },
          {
            path: '/EN/doorForbidManage/doorControl/faceEquipment',
            component: resolve => require(['./pagesEN/doorForbidManage/faceEquipment.vue'], resolve)
          },
          {
            path: '/EN/doorForbidManage/doorControl/QRCode',
            component: resolve => require(['./pagesEN/doorForbidManage/QRCode.vue'], resolve)
          },
          
        ]
      },
      {
        path: '/EN/doorForbidManage/visitorManage',
        component: visitorManageEN,
        redirect: '/EN/doorForbidManage/visitorManage/visitorAnalysis',
        children:[
          {
            path: '/EN/doorForbidManage/visitorManage/QRCodeStatistics',
            component: resolve => require(['./pagesEN/doorForbidManage/QRCodeStatistics.vue'], resolve)
          },
          {
            path: '/EN/doorForbidManage/visitorManage/visitorAnalysis',
            component: resolve => require(['./pagesEN/doorForbidManage/visitorAnalysis.vue'], resolve)
          },
          {
            path: '/EN/doorForbidManage/visitorManage/visitorInfo',
            component: resolve => require(['./pagesEN/doorForbidManage/visitorInfo.vue'], resolve)
          }
        ]
      },
      {
        path: '/EN/doorForbidManage/operationLog',
        component: resolve => require(['./pagesEN/doorForbidManage/operationLog.vue'], resolve)
      },
      
    ]
  },
  //计划管理
  {
    path: '/EN/planManage',
    component: containerEN,
    name:'',
    redirect: '/EN/planManage/alanningStatistics',
    children:[
      {
        path: '/EN/planManage/alanningStatistics',
        component: resolve => require(['./pagesEN/planManage/alanningStatistics.vue'], resolve)
      },
      {
        path: '/EN/planManage/planFeedback',
        component: resolve => require(['./pagesEN/planManage/planFeedback.vue'], resolve)
      },
      {
        path: '/EN/planManage/plansList',
        component: resolve => require(['./pagesEN/planManage/plansList.vue'], resolve)
      }
    ]
  },
  //品质管理
  {
    path: '/EN/qualityManage',
    component: containerEN,
    name:'',
    redirect: '/EN/qualityManage/typeManage',
    children:[
      {
        path: '/EN/qualityManage/typeManage',
        component: resolve => require(['./pagesEN/qualityManage/typeManage.vue'], resolve)
      },
      {
        path: '/EN/qualityManage/standardApproval',
        component: resolve => require(['./pagesEN/qualityManage/standardApproval.vue'], resolve)
      },
      {
        path: '/EN/qualityManage/standardManage',
        component: resolve => require(['./pagesEN/qualityManage/standardManage.vue'], resolve)
      },
      {
        path: '/EN/qualityManage/normManage',
        component: resolve => require(['./pagesEN/qualityManage/normManage.vue'], resolve)
      }
    ]
  },
  //采购管理
  {
    path: '/EN/purchasingManage',
    component: containerEN,
    name:'',
    redirect: '/EN/purchasingManage/purchasingRequisition',
    children:[
      {
        path: '/EN/purchasingManage/purchasingRequisition',
        component: resolve => require(['./pagesEN/purchasingManage/purchasingRequisition.vue'], resolve)
      },
      {
        path: '/EN/purchasingManage/purchaseOrder',
        component: resolve => require(['./pagesEN/purchasingManage/purchaseOrder.vue'], resolve)
      },
      {
        path: '/EN/purchasingManage/statisticalAnalysis',
        component: resolve => require(['./pagesEN/purchasingManage/statisticalAnalysis.vue'], resolve)
      }
    ]
  },
  //预算管理
  {
    path: '/EN/budgetManage',
    component: containerEN,
    name:'',
    redirect: '/EN/budgetManage/budgetAnalysis',
    children:[
      {
        path: '/EN/budgetManage/budgetAnalysis',
        component: resolve => require(['./pagesEN/budgetManage/budgetAnalysis.vue'], resolve)
      }
    ]
  },
  //车辆管理
  {
    path: '/EN/vehicleManage',
    component: containerEN,
    name:'',
    redirect: '/EN/vehicleManage/yardInformation',
    children:[
      {
        path: '/EN/vehicleManage/yardInformation',
        component: resolve => require(['./pagesEN/vehicleManage/yardInformation.vue'], resolve)
      },
      {
        path: '/EN/vehicleManage/vehicleInformation',
        component: resolve => require(['./pagesEN/vehicleManage/vehicleInformation.vue'], resolve)
      }
    ]
  },
  //后勤管理
  {
    path: '/EN/logisticsManage',
    component: containerEN,
    name:'',
    redirect: '/EN/logisticsManage/serviceAnnouncement',
    children:[
      {
        path: '/EN/logisticsManage/serviceAnnouncement',
        component: resolve => require(['./pagesEN/logisticsManage/serviceAnnouncement.vue'], resolve)
      },
      {
        path: '/EN/logisticsManage/communication',
        component: resolve => require(['./pagesEN/logisticsManage/communication.vue'], resolve)
      },
      
      {
        path: '/EN/logisticsManage/restaurantManage',
        component: resolve => require(['./pagesEN/logisticsManage/restaurantManage.vue'], resolve)
      },//businessManage
      {
        path: '/EN/logisticsManage/vehicleManage',
        component: resolve => require(['./pagesEN/logisticsManage/vehicleManage.vue'], resolve)
      },
      {
        path: '/EN/logisticsManage/businessManage',
        component: businessManageEN,
        redirect: '/EN/logisticsManage/businessManage/conferenceManage',
        children:[
          {
            path: '/EN/logisticsManage/businessManage/conferenceManage',
            component: resolve => require(['./pagesEN/logisticsManage/conferenceManage.vue'], resolve)
          },
          {
            path: '/EN/logisticsManage/businessManage/myMeeting',
            component: resolve => require(['./pagesEN/logisticsManage/myMeeting.vue'], resolve)
          }
        ]
      }
      
    ]
  },
  //系统管理
  {
    path: '/EN/systemManage',
    component: containerEN,
    name:'',
    redirect: '/EN/systemManage/userManages',
    children:[
      //logManage
      {
        path: '/EN/systemManage/logManage',
        component: logManageEN,
        redirect: '/EN/systemManage/logManage/operationLog',
        children:[
          {
            path: '/EN/systemManage/logManage/operationLog',
            component: resolve => require(['./pagesEN/systemManage/operationLog.vue'], resolve)
          },
          {
            path: '/EN/systemManage/logManage/loginLog',
            component: resolve => require(['./pagesEN/systemManage/loginLog.vue'], resolve)
          }
        ]
      },
      {
        path: '/EN/systemManage/userManages',
        component:userManagesEN,
        redirect: '/EN/systemManage/userManages/organizationalStructure',
        children:[
          {
            path: '/EN/systemManage/userManages/organizationalStructure',
            component: resolve => require(['./pagesEN/systemManage/organizationalStructure.vue'], resolve)
          },
          {
            path: '/EN/systemManage/userManages/basicInformation',
            component: resolve => require(['./pagesEN/systemManage/basicInformation.vue'], resolve)
          }
          
        ]
      },//
      {
        path: '/EN/systemManage/authorManage',
        component: authorManageEN,
        redirect: '/EN/systemManage/authorManage/roleManage',
        children:[
          {
            path: '/EN/systemManage/authorManage/roleManage',
            component: resolve => require(['./pagesEN/systemManage/roleManage.vue'], resolve)
          },
          {
            path: '/EN/systemManage/authorManage/userManage',
            component: resolve => require(['./pagesEN/systemManage/userManage.vue'], resolve)
          }
        ]
      },
      {
        path: '/EN/systemManage/configManage',
        component: resolve => require(['./pagesEN/systemManage/configManage.vue'], resolve)
      }
    ]
  },
  //综合监管
  {
    path: '/EN/supervise',
    component: superviseContainerEN,
    name:'',
    redirect: '/EN/supervise/building',
    children:[
      //建筑群
      {
        path: '/EN/supervise/building',
        component: operationMonitoringEN,
        name: '',
        redirect: '/EN/supervise/building',
        children:[
          {
            path: '/EN/supervise/building',
            component: resolve => require(['./pagesEN/supervise/building.vue'], resolve)
          },
          {
            path: '/EN/supervise/building/powerconsumption',
            component: resolve => require(['./pagesEN/supervise/powerConsumption.vue'], resolve)
          },
          {
            path: '/EN/supervise/building/powerStation',
            component: resolve => require(['./pagesEN/supervise/powerStation.vue'], resolve)
          }
        ]
      },
      //园区安防
      {
        path: '/EN/supervise/parkSecurity',
        redirect: '/EN/supervise/parkSecurity',
        component: monitoringAreaEN,
        name: '',
        children:[
          {
            path: '/EN/supervise/parkSecurity',
            component: resolve => require(['./pagesEN/supervise/parkSecurity.vue'], resolve)
          },
          {
            path: '/EN/supervise/parkSecurityDetail',
            component: resolve => require(['./pagesEN/supervise/parkSecurityDetail.vue'], resolve)
          },
        ]
      },
      //生态环境
      {
        path: '/EN/supervise/environment',
        name: '',
        component: resolve => require(['./pagesEN/supervise/environment.vue'], resolve)
      },
      //市政设施
      {
        path: '/EN/supervise/facilities',
        redirect: '/EN/supervise/facilities',
        component: facilitiesItemPublicEN,
        name: '',
        children:[
          {
            path: '/EN/supervise/facilities',
            component: resolve => require(['./pagesEN/supervise/facilities.vue'], resolve)
          }
        ]
      },
      //动静交通
      {
        path: '/EN/supervise/traffic',
        name: '',
        component: resolve => require(['./pagesEN/supervise/traffic.vue'], resolve)
      },
      //信息发布
      {
        path: '/EN/supervise/information/infoList',
        component: facilitiesItemEN,
        name: '',
        redirect: '/EN/supervise/information/infoList',
        children:[
          {
            path:'',
            component: programTopLayoutEN,
            redirect: '/EN/supervise/information/infoList',
             children:[
              {
                path: '/EN/supervise/information/infoList',
                component: resolve => require(['./pagesEN/supervise/infoList.vue'], resolve)
              },
              {
                path: '/EN/supervise/information/programInfo',
                component: resolve => require(['./pagesEN/supervise/programInfo.vue'], resolve)
              },
              {
                path: '/EN/supervise/information/taskRelease',
                component: resolve => require(['./pagesEN/supervise/taskRelease.vue'], resolve)
              }
            ]
          }
        ]
      },
      //资源管理
      {
        path: '/EN/supervise/resourceManage',
        redirect: '/EN/supervise/resourceManage',
        component: resourceClassifyEN,
        name: '',
        children:[
          {
            path: '/EN/supervise/resourceManage',
            component: resolve => require(['./pagesEN/supervise/resourceManage.vue'], resolve)
          }
        ]
      },
      //设施点检
      {
        path: '/EN/supervise/facilitiesInspection',
        redirect: '/EN/supervise/facilitiesInspection',
        component: resourceClassifyEN,
        name: '',
        children:[
          {
            path: '/EN/supervise/facilitiesInspection',
            component: resolve => require(['./pagesEN/supervise/facilitiesInspection.vue'], resolve)
          }
        ]
      },
      //数据挖掘
      {
        path: '/EN/supervise/dataMining',
        redirect: '/EN/supervise/dataMining',
        component: resourceClassifyEN,
        name: '',
        children:[
          {
            path: '/EN/supervise/dataMining',
            component: resolve => require(['./pagesEN/supervise/dataMining.vue'], resolve)
          }
        ]
      },
      //控制中心
      {
        path: '/EN/supervise/controls',
        name: '',
        component: resolve => require(['./pagesEN/supervise/controls.vue'], resolve)
      },
      //报警中心
      {
        path: '/EN/supervise/alarm',
        name: '',
        component: resolve => require(['./pagesEN/supervise/alarm.vue'], resolve)
      },
      //工作流引擎
      {
        path: '/EN/supervise/workflow',
        name: '',
        component: resolve => require(['./pagesEN/supervise/workflow.vue'], resolve)
      }
    ]
  },
]
