import { PASSWORD_LENGTH_MAX, PASSWORD_LENGTH_MIN } from '../constants/EvfyConstants';

export default {
  "components": {
    "mobile": {
      "all": "全部",
      "suggested": "建议",
      "noCountry": "找不到比赛。"
    }
  },
  "ui": {
    "guide": {
      "title1": "搜索",
      "description1": "在您需要的任何地方找到充电站。",
      "title2": "筛选",
      "description2": "通过连接器类型进行过滤充电站。",
      "title3": "最爱",
      "description3": "保存您喜欢的充电站以快速访问和更新。",
      "title4": "历史",
      "description4": "跟踪您的检查。",
      "title5": "地图",
      "description5": "发现您附近或路线附近的充电站。"
    },
    "login": {
      "signIn": "登入",
      "signUp": "报名",
      "google": "谷歌",
      "facebook": "Facebook",
      "useSocialLogin": "使用社交登录",
      "noAccount": "这里是新的？",
      "createAccount": "创建一个帐户",
      "forgotPassword": "忘记密码"
    },
    "signup": {
      "firstName": "名",
      "lastName": "姓",
      "passwordAgain": "再次密码",
      "mobile": "手机号码",
      "haveAnAccount": "我已经有一个帐户",
      "acceptAgreement": "通过单击此处，我​​指出我已经阅读并了解了条款和条件。",
      "passwordMismatch": "您输入的密码不匹配。"
    },
    "forgotPassword": {
      "changeEmail": "更改电子邮件",
      "resetPassword": "重置密码",
      "title": "忘记密码",
      "btnSubmit": "提交",
      "dismissed": "重置密码已被驳回",
      "description": "忘记密码了吗？",
      "emailSent": "已将电子邮件发送到您的电子邮件地址{0}。",
      "openEmailMessage": "打开您的电子邮件应用程序以查找发送给您的电子邮件。",
      "openEmailTitle": "您想打开哪个应用程序？"
    },
    "home": {
      "title": "家",
      "fastC": "快速地",
      "slowC": "慢的",
      "exclusiveC": "独家的",
      "addVehicle": "添加BEV或PHEV",
      "verifyEmail": "验证电子邮件"
    },
    "bottomNav": {
      "home": "家",
      "chargers": "电动汽车站",
      "settings": "设置",
      "profile": "轮廓"
    },
    "chargers": {
      "title": "所有充电器",
      "showAllFilters": "显示所有过滤器...",
      "hideAllFilters": "隐藏所有过滤器...",
      "mapOpenDialogTitle": "打开地图的应用",
      "mapOpenDialogMessage": "您想使用哪个应用程序？",
      "exclusive": "独家的",
      "excludeExclusive": "排除独家",
      "includeExclusive": "包括独家"
    },
    "settings": {
      "bannerDescription": "更新您的个人资料并添加车辆以获得无缝体验。",
      "okGotIt": "好的。",
      "personal": "个人的",
      "community": "社区",
      "myProfile": "我的个人资料",
      "myVehicles": "我的车辆",
      "addChargingStation": "添加充电站",
      "myStatistics": "我的统计...",
      "checkins30": "签到，最近30天",
      "checkinsTotal": "签到，总计",
      "locationsAdded": "添加了位置",
      "statistics": "统计数据",
      "allChargers": "所有充电器",
      "registeredUsers": "所有重新登陆的用户",
      "checkins": "检查",
      "myCheckins": "我的检查",
      "activities": "活动",
      "miscellaneous": "各种各样的",
      "appSettings": "应用设置",
      "rateUs": "评价我们",
      "logout": "登出",
      "faq": "常见问题",
      "feedback": "给予反馈"
    },
    "editProfile": {
      "title": "我的个人资料",
      "newPassword": "新密码",
      "updateProfile": "更新配置文件",
      "changePassword": "更改密码",
      "currentPassword": "当前密码",
      "changePasswordDescription": "您可以在此处更改帐户密码。",
      "changePasswordSuccessAlert": "您现在将被登录。"
    },
    "myVehicles": {
      "model": "模型",
      "title": "我的车辆",
      "nickName": "昵称",
      "addVehicle": "添加车辆",
      "manufacturer": "制造商",
      "acProtocol": "交流充电协议",
      "dcProtocol": "DC充电协议",
      "manufactureYear": "制造年",
      "notInList": "我的车不在清单中",
      "notInListDescription": "与我们分享您的车辆详细信息，审查后我们将其添加到系统中。"
    },
    "appSettings": {
      "title": "应用设置"
    }
  },
  "common": {
    "ok": "好的",
    "or": "或者",
    "no": "不",
    "yes": "是的",
    "add": "添加",
    "email": "电子邮件",
    "clear": "清除",
    "submit": "提交",
    "cancel": "取消",
    "update": "更新",
    "dismiss": "解雇",
    "password": "密码",
    "information": "信息",
    "areYouSure": "你确定吗？",
    "deleteSelected": "您真的想删除所选物品吗？"
  },
  "errors": {
    "emailSendSuccess": "OTP已成功发送。",
    "emailSendFail": "抱歉，发生了错误。",
    "required": "请提供一个价值。",
    "invalidInput": "哎呀！",
    "acceptTerms": "请接受继续的条款。",
    "invalidEmail": "哎呀！",
    "linkOpenFailure": "无法打开链接。",
    passwordLengthMin: `Your password must be no longer than ${PASSWORD_LENGTH_MIN} characters.`,
    passwordLengthMax: `Your password must be at least ${PASSWORD_LENGTH_MAX} characters long for better security.`
  },
  "serverResponses": {
    "LOGIN_SUCCESS": "登录成功。",
    "LOGIN_ERROR": "登录失败。",
    "LOGOUT_SUCCESS": "注销成功。",
    "LOGOUT_ERROR": "注销失败。",
    "REGISTER_SUCCESS": "注册成功。",
    "REGISTER_PROFILE_UPDATE_ERROR": "配置文件更新失败。",
    "REGISTER_EMAIL_VERIFICATION_ERROR": "电子邮件验证失败。",
    "REGISTER_ERROR": "注册失败。",
    "RESET_PASSWORD_EMAIL_SUCCESS": "一封电子邮件已发送到您的电子邮件地址。",
    "RESET_PASSWORD_EMAIL_ERROR": "未能发送电子邮件。",
    "LOGIN_ERROR_INVALID_CREDENTIAL": "无效的电子邮件或密码。",
    "RESET_PASSWORD_EMAIL_TOO_MANY_REQUESTS": "请求太多。",
    "CHANGE_PASSWORD_SUCCESS": "密码已成功更改。",
    "CHANGE_PASSWORD_ERROR": "密码已更改失败。",
    "CHANGE_PASSWORD_ERROR_INVALID_CREDENTIAL": "身份验证失败。",
    "CHANGE_PASSWORD_ERROR_GENERIC": "更改密码时的系统故障。",
    "SUGGEST_EV_SUCCESS": "我们收到了您的反馈。",
    "SUGGEST_EV_FAIL": "系统错误。",
    "PROFILE_ADD_EV_SUCCESS": "您的BEV/PHEV已添加到您的个人资料中。",
    "PROFILE_ADD_EV_FAIL": "添加车辆时发生错误。",
    "PROFILE_REMOVE_EV_SUCCESS": "您的BEV/PHEV已从您的个人资料中删除。",
    "PROFILE_REMOVE_EV_FAIL": "卸下车辆时发生了错误。"
  },
  "seek": {
    "homeBannerTitle": "完成剩余的步骤，以充分利用应用程序！",
    "verifyEmail": "您的电子邮件尚未验证。",
    "addVehicle": "添加您的BEV或PHEV车辆以获得无缝的应用体验。"
  }
}