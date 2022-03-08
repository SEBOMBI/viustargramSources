/**
 * 빈 이벤트 객체를 만들어서 이벤트 객체를 통래 컴포넌트가 데이터 전달
 * 이벤트버스는 아무것도 없는 비어있는 Vue 인스턴스 입니다

 */
import Vue from 'vue';

const EventBus = new Vue();

export default EventBus;