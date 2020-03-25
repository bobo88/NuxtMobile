<template>
  <div class="comedy-show container">
    <div class="banner">
      <img src="~/assets/images/comedy-show/banner.jpg" width="100%" alt="">

      <p class="rule" @click="gotoRulerPage">Ruler</p>
    </div>

    <div class="list-box">
      <div class="list-nav" v-if="navList && navList.length > 1">
        <div v-swiper:mySwiper="swiperOption">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" style="width: auto;" :class="{'is-current': item === currentNav}" v-for="(item, index) in navList" :key="index" @click="changeSwiperSlide(item)">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <ul class="list-list">
        <!-- single user -->
        <li class="single-user" v-for="(item, index) in listList" :key="index">
          <!-- 用户头像 -->
          <p class="avator">
            <img src="~/assets/images/comedy-show/avator.png" alt="">
          </p>
          <!-- 用户相关信息 -->
          <div class="user-info">
            <p class="user-name">Elizabeth</p>
            <p class="follows-num"><i class="star-icon"></i><span>75.4K</span></p>
            <p class="user-desc">Follow me on Vskit Follow me on VskitFollow me on VskitFollow me on VskitFollow me on VskitFollow me on VskitFollow me on VskitFollow me on VskitFollow me on VskitFollow me on VskitFollow me on Vskit</p>
          </div>
          <!-- follow -->
          <p class="follow-box" :class="{'is-following': item.following === 1}">
            <span v-if="item.following !== 1">Follow</span>
            <span v-else>Following</span>
          </p>
        </li>
      </ul>
    </div>

    <div class="bottom-arrow-box">
      <img src="~/assets/images/comedy-show/bottom_arrow.png" class="icon" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: ['Comedy', 'Technology', 'Beautiful on Vskit', 'Football', 'other'],
      listList: [
        {
          userid: '',
          avator: '',
          username: '',
          follows: '',
          userdesc: ''
        },
        {
          userid: '',
          avator: '',
          username: '',
          follows: '',
          userdesc: ''
        },
        {
          userid: '',
          avator: '',
          username: '',
          follows: '',
          userdesc: '',
          following: 1
        },
        {
          userid: '',
          avator: '',
          username: '',
          follows: '',
          userdesc: ''
        },
        {
          userid: '',
          avator: '',
          username: '',
          follows: '',
          userdesc: ''
        },
        {
          userid: '',
          avator: '',
          username: '',
          follows: '',
          userdesc: ''
        }
      ],
      currentNav: 'Comedy',
      swiperOption: {
        // loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
        freeModeSticky: true,
        slideToClickedSlide: true,
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            console.log('onTap', this);
          }
        }
      }
    }
  },
  mounted () {
    console.log(8888)
  },
  methods: {
    changeSwiperSlide (item) {
      this.currentNav = item;
    },
    gotoRulerPage () {
      this.$router.push('/comedy-show/ruler')
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    padding-bottom: 50px;
    width: 720px;
  }
  .banner {
    position: relative;
    width: 720px;
    height: 372px;
    background: #230839;
    .rule {
      position: absolute;
      z-index: 9;
      top: 12px;
      right: 0;
      padding-left: 10px;
      width: 104px;
      height: 44px;
      line-height: 42px;
      color: #d5cfd3;
      font-size: 24px;
      text-align: center;
      border: 1px solid #dec1c0;
      border-radius: 22px 0 0 22px;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .list-box {
    padding: 0 24px;
    .list-nav {
      padding-bottom: 30px;
      height: 90px;
      line-height: 60px;
      color: rgba(255, 255, 255, 0.5);
      font-size: 32px;
      .is-current {
        position: relative;
        z-index: 3;
        color: #fff;
        font-size: 36px;
        font-weight: bold;
        &:after {
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 50%;
          margin-left: -32px;
          content: '';
          width: 64px;
          height: 4px;
          background: #fff;
          border-radius: 5px;
        }
      }
    }
    .list-list {
      .single-user {
        margin-bottom: 8px;
        padding: 0 16px;
        width: 672px;
        height: 184px;
        border: 1px solid #49335b;
        border-radius: 8px;
        background: #3c2450;
        .avator {
          margin-right: 16px;
          display: inline-block;
          padding: 44px 0;
          width: 96px;
          height: 184px;
          line-height: 96px;
          font-size: 0;
          vertical-align: middle;
          img {
            width: 96px;
            height: 96px;
            border-radius: 48px;
            border: 1px solid #fff;
          }
        }
        .user-info {
          display: inline-block;
          padding-top: 24px;
          width: 360px;
          height: 184px;
          vertical-align: middle;
          .user-name {
            margin-bottom: 5px;
            height: 38px;
            line-height: 38px;
            font-size: 32px;
            color: #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .follows-num {
            margin-bottom: 5px;
            height: 28px;
            line-height: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: middle;
            .star-icon {
              margin-right: 6px;
              display: inline-block;
              width: 22px;
              height: 21px;
              background: url('../../assets/images/comedy-show/star_icon.png') center center no-repeat;
              background-size: 22px 21px;
              vertical-align: middle;
            }
            span {
              display: inline-block;
              color: rgba(255, 255, 255, 0.6);
              font-size: 24px;
              vertical-align: middle;
            }
          }
          .user-desc {
            height: 56px;
            line-height: 28px;
            color: rgba(255, 255, 255, 0.6);
            font-size: 24px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .follow-box {
          display: inline-block;
          width: 144px;
          height: 48px;
          line-height: 48px;
          color: #fff;
          font-size: 28px;
          background: url('../../assets/images/comedy-show/btn_bg_follow_color.png') center center no-repeat;
          background-size: 144px 48px;
          text-align: center;
          vertical-align: middle;
          &.is-following {
            height: 48px;
            line-height: 46px;
            background: none;
            border: 1px solid rgba(255, 255, 255, 0.6);
            border-radius: 35px;
            font-size: 24px;
            color: rgba(255, 255, 255, 0.6);
          }
        }
      } 
    }
  }

  .bottom-arrow-box {
    position: fixed;
    z-index: 9;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 140px;
    background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
    background: -moz-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
    .icon {
      position: absolute;
      z-index: 10;
      left: 50%;
      top: 64px;
      margin-left: -17px;
      width: 34px;
      height: 47px;
    }
  }
</style>