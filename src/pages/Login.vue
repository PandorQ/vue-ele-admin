<template>
  <el-container 
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading">
    <el-header class="login-header">
      <div class="login-container">
        <a href="www.imooc.com" target="_blank" />
      </div>
    </el-header>
    <el-main class="login-main">
      <div class="login-container">
        <div class="login-form">
          <div class="form-title">
            <h3 class="underLine">慕课管理</h3>
          </div>
          <div class="form-content">
            <div>
              <ValidationProvider rules="phoneOrEmailValid" v-slot="v">
                <el-row>
                  <el-input class="content-input" placeholder="请输入手机号码/邮箱" v-model="account"></el-input>
                </el-row>
                <el-row class="message-row">
                  <span class="errMsg">{{v.errors[0]}}</span>
                </el-row>
              </ValidationProvider>
              <ValidationProvider rules="passwordValid" v-slot="v">
                <el-row>
                  <el-input class="content-input" placeholder="请输入密码" v-model="password" show-password></el-input>
                </el-row>
                <el-row class="message-row">
                  <span class="errMsg">{{v.errors[0]}}</span>
                </el-row>
              </ValidationProvider>
              <el-row class="content-footer" type="flex" justify="space-between">
                <el-col>
                  <el-checkbox class="content-checkbox" label="7天内自动登录" v-model="rememberMe" />
                </el-col>
                <el-col class="helper">
                  <a href="#">找回密码</a>|
                  <a href="#">无法登录</a>
                </el-col>
              </el-row>
              <el-row>
                <el-button class="content-button" type="primary" round @click="loginHandler">登录</el-button>
              </el-row>
              <div class="login-footer">
                <el-row type="flex">
                  <el-col>
                    <span class="other-login">其他方式登录</span>
                  </el-col>
                  <el-col>
                    <a href="#" class="iconfont icon-github" style="color:#2c2c2c"></a>
                    <a href="#" class="iconfont icon-weixin" style="color:#15bd10"></a>
                    <a href="#" class="iconfont icon-weibo" style="color:#d81e06"></a>
                    <a href="#" class="iconfont icon-qq" style="color:#1296db"></a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer class="login-footer">
      <p class="copy">&copy;2020 imooc.com All Rights Reserved 京ICP备 13046642号</p>
    </el-footer>
  </el-container>
</template>

<script>
import api from "../api"
import { mapState,mapMutations } from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      account: "admin123@qq.com",
      password: "1234qwer",
      rememberMe: false,
      loading: false
    };
  },
  computed:{
     ...mapState([
       'token'
     ]),
  },
  methods: {
    ...mapMutations([
      'setToken'
    ]),
    loginHandler() {
      this.loading = true;
      this.$axios
        .post(api.IMOOC_API.LOGIN, {
          account: this.account,
          password: this.password
        })
        .then((res) => {
          if(res){
            this.loading=false
          }
          if(res.code == 0){
              let data = res.data;
              this.$LocalStore.setToken(data.token)              
              this.$message({
                showClose:true,
                message:res.message,
                type:'success',
                duration:3000
              })
          }else{
            this.$message({
                showClose:true,
                message:res.message,
                type:'error',
                duration:3000
              })
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
//  登录容器边界控制
.login-container {
  width: 384px;
  margin: 0 auto;
}

// 文字下标
.underLine {
  &::before {
    content: " ";
    position: absolute;
    left: 5px;
    right: 5px;
    bottom: -13px;
    border-bottom: 4px solid @ColorA;
  }
}

.login-header {
  height: auto !important;
  a {
    display: inline-block;
    margin-top: 46px;
    margin-bottom: 20px;
    height: 46px;
    width: 100%;
    background: url("../assets/imgs/signlogo.png") no-repeat center;
  }
}

.login-main {
  padding-top: 20px;
  .login-form {
    background-color: #ffffff;
    padding: 10px 30px 20px 30px;
    box-shadow: 0 12px 24px 0 rgba(28, 31, 33, 0.1);
    border-radius: 12px;
    .form-title {
      color: @ColorC;
      display: flex;
      h3 {
        margin-left: 30px;
        font-weight: 600;
        position: relative;
        font-size: @FontSizeB;
      }
    }

    .form-content {
      margin-top: 30px;
      .content-input {
        font-size: 16px;
      }
      .message-row {
        height: 30px;
        line-height: 30px;
        .errMsg {
          color: @ColorB;
          font-size: 12px;
        }
      }
      .content-checkbox {
        color: @ColorC;
      }
      .content-footer {
        margin-top: 10px;
        .helper {
          color: @ColorE;
          a {
            display: inline-block;
            color: @ColorC;
            text-decoration: none;
            font-size: @FontSizeC;
            padding: 0 10px;
            box-sizing: border-box;
            cursor: pointer;
            :hover {
              color: #000;
            }
          }
        }
      }
      .content-button {
        margin-top: 20px;
        width: 100%;
        font-size: 16px;
      }
      .login-footer {
        margin-top: 20px;
        .other-login {
          font-size: 14px;
          color: @ColorA;
        }
        a {
          display: inline-block;
          font-size: 20px;
          margin-left: 20px;
          color: @ColorB;
          text-decoration: none;
        }
      }
    }
  }
}

.login-footer {
  .copy {
    text-align: center;
    color: @ColorE;
    font-size: @FontSizeA;
  }
}
</style>