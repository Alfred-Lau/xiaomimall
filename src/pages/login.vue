<template>
  <div class="login-container">
    <header>
      <div class="header-img">
        <img src="/imgs/login-logo.png" alt="" @click="goHome" />
      </div>
    </header>
    <div class="container">
      <img src="/imgs/login-bg.jpg" alt="" />
      <div class="login">
        <div class="login-type">
          <a class="account">账号登录</a>
          <a>扫码登录</a>
        </div>
        <div class="login-area">
          <input
            type="text"
            placeholder="邮箱/手机号码/小米ID"
            class="username"
            v-model="username"
            autocomplete="off"
          />
          <input
            type="password"
            placeholder="密码"
            class="password"
            v-model="password"
            autocomplete="off"
          />
          <input
            type="button"
            @click="onSubmit"
            class="login-btn"
            value="登录"
          />
          <p class="desc">
            <span class="left">手机短信登录/注册</span>
            <span class="right"> 立即注册 | 忘记密码</span>
          </p>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer-top">
        <ul class="items">
          <li class="item">简体</li>
          <li class="item">繁体</li>
          <li class="item">English</li>
          <li class="item">常见问题</li>
          <li class="item">隐私政策</li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p class="desc">烽火彼岸</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["setLoginInfo"]),
    onSubmit() {
      /* 处理登录逻辑 */
      const { username, password } = this;
      if (!username || !password) {
        alert("请输入用户名和密码");
        return;
      }

      // this.login({ username, password }).then((res) => {
      //   console.log("res", res);
      // });

      /* 模拟数据提交验证 */
      if (username === "boss" && password === "123456") {
        const payload = {
          username,
          password,
        };
        // alert('恭喜，登录成功');
        /* 设置 cookie */
        this.$cookie.set("userinfo", JSON.stringify(payload), {
          expire: "Session",
        });
        this.setLoginInfo(payload);
        this.$router.push("/");
      } else {
        alert("登录失败");
      }
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  header {
    width: 1220px;
    height: 112px;
    margin: 0 auto;
    .header-img {
      &:hover {
        cursor: pointer;
      }
    }
  }
  .container {
    width: 100%;
    height: 576px;
    position: relative;
    img {
      width: 100%;
    }

    .login {
      position: absolute;
      top: 37px;
      right: 15%;
      padding: 20px 30px;
      width: 360px;
      background: rgba(255, 255, 255, 1);

      &-type {
        display: flex;
        justify-content: center;
        a {
          display: inline-block;
          text-align: center;
          width: 100%;
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(102, 102, 102, 1);
          &:hover {
            color: rgba(255, 102, 0, 1);
          }
        }

        a.account::after {
          content: "|";
          position: relative;
          left: 50px;
        }
      }

      &-area {
        input {
          display: block;
          margin: 20px auto;
          padding: 18px;
          box-sizing: border-box;
          width: 348px;
          height: 50px;
          border: 1px solid rgba(229, 229, 229, 1);
          outline: none;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(153, 153, 153, 1);
          line-height: 60px;
        }
        .login-btn {
          height: auto;
          line-height: 18px;
          background: rgba(255, 102, 0, 1);
          color: #fff;
          &:hover {
            cursor: pointer;
          }
        }
      }

      .desc {
        display: flex;
        justify-content: space-between;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 20px;
      }
    }
  }

  footer {
    text-align: center;
    display: block;
    padding-bottom: 20px;
    width: 100%;
    position: absolute;
    bottom: 0;
    .footer-top {
      .items {
        display: flex;
        justify-content: center;
        .item {
          padding-left: 10px;
          color: rgba(51, 51, 51, 1);
          line-height: 38px;
          &::after {
            content: "|";
            padding-left: 10px;
          }
        }
      }
    }
  }
}
</style>
