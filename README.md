# Nomad Coder React Native 101

프론트엔드 개발자는 화면단에 보이는 모든 것을 개발할 수 있어야 하지 않을까?

앱이든 웹이든? 서버 개발자와 디자이너가 주는 것들을 쳐낼 수 있어야 한다.

마침 자바스크립트를 사용해서 앱을 개발할 수 있는 방법이 있다고 해서 공부해본다.

## Install

1. npm install --global expo-cli
2. brew install watchman

expo go라는 것을 앱스토어에서 다운받는다. 이 어플은 우리가 굳이 앱을 개발하지 않고 코드만 전달해도 화면에 보여줄 수 있는 역할을 한다.

https://expo.dev/

++) expo-cli가 deprecated 된 듯... 2021년 강의여서 어쩔 수 없는 것일까?

<img width="554" alt="image" src="https://github.com/keinn51/nomad_coder_react_native_101/assets/79993356/36d88dad-e379-4527-bc0e-5bf52443c496">


## what is react native

<img width="491" alt="image" src="https://github.com/keinn51/nomad_coder_react_native_101/assets/79993356/34a281cd-50b1-44f8-91ed-002207e60fbe">

<img width="610" alt="image" src="https://github.com/keinn51/nomad_coder_react_native_101/assets/79993356/a15bed1d-b0b2-4846-9b03-040679704c2a">

react native는 인터페이스로 우리와 운영체제 사이에 있는 것이다. 우리가 React Native로 코드를 짜면 결국 IOS 또는 Android 언어로 번역된다.

native에서 event 등을 받아오면 우리의 자바스크립트 코드가 이벤트를 처리하여 native 에게 UI를 보여줄 것을 명한다. 이 것을 보면.. 왜인지 Web과 크게 다를 것이 없어 보인다. (아직 강의 초반이라 그냥 느낌이 그렇다는 것이다..ㅎㅎ)

앱을 다운로드 받는다는 것은 PC에 웹 브라우저를 다운로드 받는다는 말과 비슷한 것일까?

## expo 깔기

```
npx create-expo-app NomadWeather
npx expo login
npm run start
```

이후 expo go 앱에 들어가서 로그인 후 화면을 보면 내가 작업하고 있는 것이 보임 (매우 신기~)


