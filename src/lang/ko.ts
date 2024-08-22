export const languageKorean = {
    "formating": {
        "main": "메인 프롬프트",
        "jailbreak": "탈옥 프롬프트",
        "chats": "과거 채팅",
        "lorebook": "로어북",
        "globalNote": "글로벌 노트",
        "authorNote": "작가의 노트",
        "lastChat": "마지막 채팅",
        "description": "캐릭터 설명",
        "personaPrompt": "페르소나 프롬프트",
        "plain": "순수 프롬프트",
        "memory": "장기 기억",
        "postEverything": "최종 삽입 프롬프트"
    },
    "errors": {
        "toomuchtoken": "에러: 요청에 필요한 최소 토큰이 최대 토큰보다 큽니다.",
        "unknownModel": "에러: 알수없는 모델 선택됨",
        "httpError": "요청 에러:",
        "noData": "파일에 데이터가 없거나 데이터가 손상됨",
        "onlyOneChat": "채팅이 하나 이상 필요합니다",
        "alreadyCharInGroup": "이미 같은 캐릭터가 그룹에 존재합니다.",
        "noUserIcon": "유저 아이콘이 없습니다.",
        "emptyText": "텍스트가 비어있습니다.",
        "wrongPassword": "비밀번호가 잘못되었습니다.",
        "networkFetch": "네트워크가 불안정하거나 서버가 응답하지 않을 때 자주 발생합니다.",
        "networkFetchWeb": "이것은 CORS 오류일 수 있습니다. 이는 브라우저의 제한으로 인해 웹 버전을 사용할 때만 발생합니다. 데스크톱 로컬 버전이나 다른 버전의 RisuAI를 사용해보세요.",
        "networkFetchPlain": "이것은 요청 오류일 수 있습니다. 설정에서 직접 요청 보내기 옵션을 비활성화해 보세요.",
        "requestLogRemoved": "요청 로그가 삭제되었습니다.",
        "requestLogRemovedDesc": "요청 로그는 앱이 재시작되거나 새로고침되면 삭제됩니다."
    },
    "showHelp": "도움말 보기",
    "help": {
        "model": "채팅에서 사용되는 모델입니다.",
        "submodel": "보조 모델은 감정 이미지, 자동 제안등을 분석하는 데 사용되는 모델입니다. gpt3.5가 권장됩니다.",
        "oaiapikey": "OpenAI용 API 키입니다. https://platform.openai.com/account/api-keys에서 구하실 수 있습니다.",
        "mainprompt": "모델의 기본적인 방향성을 정하는 프롬프트입니다.",
        "jailbreak": "jailbreak 프롬프트는 jailbreak 토글이 켜져있을 때 작동되는 프롬프트입니다.",
        "globalNote": "모델에 강력한 영향을 주는 프롬프트입니다. UJB라고도 합니다.",
        "autoSuggest": "자동으로 유저의 응답을 제안할 때 선택지를 생성하기 위해 사용되는 프롬프트입니다.",
        "formatOrder": "프롬프트의 배치 순서입니다. 아래쪽에 있을 수록 더 큰 영향을 줍니다.",
        "forceUrl": "공백이 아닐 경우. 리퀘스트가 다음 URL로 갑니다.",
        "tempature": "값이 낮을수록 캐릭터가 프롬프트를 잘 따르지만 기계처럼 반응할 가능성이 높아집니다.\n값이 높을수록 창의적인 동작이 가능하지만 캐릭터의 반응이 이상해질 수 있습니다.",
        "frequencyPenalty": "값이 높을수록 응답 내에서 대사가 반복되는 걸 줄여주지만, 값이 높으면 캐릭터의 반응이 이상해질 수 있습니다.",
        "presensePenalty": "값이 높을수록 전체 콘텍스트 내에서 대사가 반복되는 걸 줄여주지만, 값이 높으면 캐릭터의 반응이 이상해질 수 있습니다.",
        "sdProvider": "이미지 생성의 제공자 옵션입니다.",
        "msgSound": "메세지를 받았을때 *띵* 소리가 납니다.",
        "charDesc": "캐릭터의 설명입니다.",
        "charFirstMessage": "캐릭터의 첫 대사입니다.",
        "charNote": "모델에 강력한 영향을 주는 프롬프트입니다. 이 채팅에서만 적용되며, 메모리라고도 알려져 있습니다.",
        "toggleNsfw": "jailbreak 프롬프트를 끄거나 켭니다.",
        "lorebook": " AI를 위해 사용자가 만든 사전입니다. AI는 컨텍스트에서 활성화 키가 어디에 있을 때만 이를 인식합니다.",
        "loreName": "로어의 이름입니다. AI에 영향을 주지 않습니다.",
        "loreActivationKey": "활성화 키 중 하나가 컨텍스트에 존재하면 해당 로어가 활성화됩니다. 쉼표로 구분된 활성화를 구분하세요.",
        "loreorder": "순서가 높을수록 모델에 더 많은 영향을 미치며, 활성화된 로어가 많을 때 잘리지 않습니다.",
        "bias": "바이어스는 문자열이 나타날 가능성을 수정하는 키-값 데이터로, -100에서 100까지 가능하며 값이 클수록 나타날 가능성이 높고, 값이 작을수록 나타날 가능성이 낮습니다 \n경고: 토크나이저가 잘못되면 제대로 작동하지 않습니다. 추가적으로, -101로 설정하면 일부 모델에서는 '강력한 단어 밴'으로 작동합니다",
        "emotion": "감정 이미지 옵션은 캐릭터의 반응으로 분석된 캐릭터의 감정에 따라 이미지를 표시합니다. 감정 이름은 단어 *(예시: joy, happy, fear 등)* 로 입력해야 하며, **neutral** 이라는 이름의 감정이 존재하면 기본 감정이 됩니다. 제대로 작동하려면 이미지가 3개 이상이어야 합니다.",
        "imggen": "채팅을 분석한 후 프롬프트를 {{slot}}에 적용합니다.",
        "regexScript": "정규식 스크립트는 IN에 매칭되는 텍스트를 OUT으로 변경하는 스크립트입니다.\n\n네가지 옵션이 있습니다.\n\n- **입력문 수정** 유저의 입력을 수정합니다\n\n- **출력문 수정** 캐릭터의 출력을 수정합니다\n\n- **리퀘스트 데이터 수정** 리퀘스트 시 데이터를 수정합니다\n\n- **디스플레이 수정** 실제 데이터를 건들지 않고, 표시되는 것만 수정합니다.\n\nIN은 슬래시와 플레그가 없는 정규식이여야 합니다.\n\nOUT은 특수한 패턴이 포함될수 있는 문자열입니다. 패턴은 다음과 같습니다:\n\n- $$\n\n    - inserts $\n\n- $&\n\n    - inserts the matched substring.\n\n- $`\n\n    - inserts the portion of the string that precedes the matched substring.\n\n- $1\n\n    - inserts the first matching group. works with other number like 2, 3...\n\n- $(name)\n\n    - inserts the named group\n\nOUT이 **@@**로 시작 시, 문자열을 교체하지 않고, 특수한 효과를 냅니다. 효과는 다음과 같습니다:\n\n- @@emo (emotion name)\n\n    - 캐릭터가 감정 이미지 모드일시, 감정을 (emotion name)으로 정하고 감정을 더이상 교체하지 않습니다.",
        "experimental": "실험적 기능입니다. 불안정할 수 있습니다.",
        "oogaboogaURL": "웹 UI가 이전 버전의 API를 지원하는 경우, URL은 *https:.../run/textgen*과 같아야 합니다.\n\n웹 UI가 새 버전의 API를 지원하는 경우, URL은 *https://.../api/v1/generate*와 같아야 하며, API 서버를 호스트로 사용하고 인수에 --api를 추가해야 합니다.",
        "exampleMessage": "캐릭터의 출력에 영향을 주는 예시 대화입니다. 토큰을 영구적으로 사용하지 않습니다.\n\n대화의 예시 형식:\n\n```\n<START>\n{{user}}: 안녕\n{{char}}: 안녕하세요\n<START>\n{{user}}: 안녕\n하루이: 안녕하세요\n```\n\n```<START>```는 새로운 대화의 시작을 나타냅니다.",
        "creatorQuotes": "캐릭터에 대한 정보를 사용자에게 알리기 위해 첫 번째 메시지 위에 나타납니다. 프롬프트에 포함되지 않습니다.",
        "systemPrompt": "메인 프롬프트가 비어있지 않은 경우 설정에서 메인 프롬프트를 대체하는 프롬프트입니다.",
        "chatNote": "현재 채팅에 포함되는 메모리 또는 UJB라고도 알려진 프롬프트입니다.",
        "personality": "캐릭터의 성격에 대한 간단한 설명입니다. **이 옵션을 사용하는 것은 권장되지 않습니다. 대신 캐릭터 설명에 설명하십시오.**",
        "scenario": "캐릭터의 시나리오에 대한 간단한 설명입니다. **이 옵션을 사용하는 것은 권장되지 않습니다. 대신 캐릭터 설명에 설명하십시오.**",
        "utilityBot": "활성화되면 메인 프롬프트, jailbreak 및 기타 프롬프트를 무시합니다. 역할극이 아닌 유틸리티용 봇에 사용됩니다.",
        "loreSelective": "선택 모드가 토글되면 활성화 키와 보조 키 모두 일치해야 로어가 활성화됩니다.",
        "loreRandomActivation": "확률 조건 사용이 활성화된 경우, 로어의 다른 조건이 모두 충족되면 로어가 활성화되며, 각 채팅을 보낼 때마다 설정된 확률에 따라 활성화됩니다.",
        "additionalAssets": "채팅에 표시할 추가 에셋입니다.\n\n- `{{raw::<에셋 이름>}}`을 경로로 사용하려면\n- `{{img::<에셋 이름>}}`을 이미지로 사용하려면\n- `{{video::<에셋 이름>}}`을 비디오로 사용하려면\n- `{{audio::<에셋 이름>}}`을 오디오로 사용하려면\n    - 배경 HTML에 넣는 것이 좋습니다.",
        "superMemory": "SuperMemory는 AI에게 요약된 데이터를 제공하여 캐릭터가 더 많이 기억하도록합니다.\n\nSuperMemory 모델은 해당 텍스트를 요약하는 모델입니다. 보조 모델은 2000개 이상의 토큰을 가진 필터되지 않은 모델이 아닌 경우 권장되지 않습니다.\n\nSuperMemory 프롬프트는 요약을 보내기 위해 어떤 프롬프트를 보내야 하는지 결정합니다. 비워두면 기본 프롬프트를 사용합니다. 비워두는 것이 권장됩니다.\n\n모두 설정한 후 캐릭터의 설정에서 활성화할 수 있습니다.",
        "replaceGlobalNote": "비어 있지 않으면 현재 글로벌 노트를 이로 대체합니다.",
        "backgroundHTML": "채팅 화면의 배경에 삽입 될 마크다운/HTML 데이터입니다.\n\n추가 에셋을 사용할 수도 있습니다. 예를 들어, 배경 음악에 `{{audio::<에셋 이름>}}`을 사용할 수 있습니다.\n\n또한 다음과 같은 추가 에셋을 사용할 수 있습니다:\n - `{{bg::<에셋 이름>}}`: 에셋으로 배경을 삽입합니다.",
        "additionalText": "AI가 필요한 경우에만 캐릭터 설명에 추가 될 텍스트입니다. 두 개의 새 줄로 구분합니다.",
        "charjs": "캐릭터와 함께 실행될 자바스크립트 코드입니다. 예를 들어, `https://github.com/kwaroran/RisuAI/blob/main/src/etc/example-char.js`를 확인할 수 있습니다. 현재 보안 문제로 인해 사용을 권장하지 않습니다. 엑스포트에는 포함되지 않습니다.",
        "romanizer": "로마자 변환기는 비로마자 문자를 로마자 문자로 변환하여 데이터 요청 시 비로마자 문자를 사용할 때 토큰을 줄이는 데 사용되는 플러그인입니다. 이로 인해 원래 모델과 다른 출력이 나올 수 있습니다. 채팅에서 로마자 문자를 사용할 때 이 플러그인을 사용하는 것은 권장되지 않습니다.",
        "oaiRandomUser": "활성화되면 요청에 사용자 매개 변수로 임의의 UUID가 입력되고 새로 고침할 때마다 변경됩니다. AI가 사용자를 식별하는 것을 방지하는 데 사용할 수 있습니다.",
        "inlayImages": "활성화하면 이미지를 채팅에 삽입할 수 있으며, 지원하는 경우 AI가 볼 수 있습니다.",
        "metrica": "Metric Systemizer는 요청 시 미터법을 제외한 단위를 미터법으로 변환하고, 출력 시 미터법을 사용하여 성능을 향상시키기 위해 사용되는 플러그인입니다. 채팅에서 야드파운드법을 사용할 때 이 플러그인을 사용하는 것은 권장되지 않습니다.",
        "lorePlus": "LoreBook+는 더 나은 매칭 성능을 위해 벡터DB를 사용하는 실험적인 기능입니다.",
        "topP": "Top P는 뉴클레우스 샘플링을 위한 확률 임계값입니다. 모델은 top_p 확률 질량을 가진 토큰의 결과를 고려합니다.",
        "openAIFixer": "OpenAI Fixer는 OpenAI의 일부 문제를 수정하는 플러그인입니다.",
        "sayNothing": "활성화되면 문자열이 입력되지 않을 때 '아무 말도 하지 않음'을 입력합니다.",
        "showUnrecommended": "활성화되면 권장되지 않는, 사용되지 않는 설정을 표시합니다. 이러한 설정을 사용하는 것을 권장하지 않습니다.",
        "imageCompression": "활성화되면 캐릭터 내보내기 시 이미지를 압축합니다. 애니메이션 이미지가 작동하지 않는 경우 이 옵션을 비활성화해보세요.",
        "useExperimental": "활성화되면 일부 실험적인 기능이 표시됩니다.",
        "forceProxyAsOpenAI": "활성화되면 커스텀 모델 사용 시 OpenAI 형식을 강제로 사용합니다.",
        "forcePlainFetch": "활성화되면 네이티브 HTTP 요청 대신 브라우저 Fetch API를 사용합니다. 이로 인해 CORS 오류가 발생할 수 있습니다.",
        "autoFillRequestURL": "활성화되면 요청 URL을 현재 모델과 일치하도록 자동으로 채웁니다.",
        "chainOfThought": "활성화되면 생각의 사슬 프롬프트를 프롬프트에 추가합니다.",
        "gptVisionQuality": "이 옵션은 이미지 감지 모델의 품질을 설정하는 데 사용됩니다. 품질이 높을수록 감지가 더 정확하지만 토큰이 더 많이 사용됩니다.",
        "genTimes": "이 옵션은 지원 모델에서 생성할 응답 수를 설정하는 데 사용됩니다. 첫 번째 응답 이외의 다른 응답은 캐시된 리롤로 작동합니다. 이는 모델의 비용을 줄일 수 있지만, 리롤 없이 사용하는 경우 비용이 증가할 수도 있습니다.",
        "requestretrys": "이 옵션은 요청이 실패할 때 요청을 다시 시도할 횟수를 설정하는 데 사용됩니다.",
        "emotionPrompt": "이 옵션은 감정을 감지하는 데 사용되는 프롬프트를 설정하는 데 사용됩니다. 비어 있으면 기본 프롬프트를 사용합니다.",
        "removePunctuationHypa": "활성화되면 HypaMemory를 실행하기 전에 구두점을 제거합니다.",
        "defaultVariables": "여기에서는 기본 변수를 정의할 수 있습니다. `<변수 이름>=<변수 값>` 형식으로 작성하고 개행으로 구분합니다. 예를 들어, `name=RisuAI`는 트리거 스크립트 및 변수 CBS와 함께 `{{getvar::A}}`, `{{setvar::A::B}}` 또는 `{{? $A + 1}}`과 같이 사용할 수 있습니다. 프롬프트 템플릿의 기본 변수와 캐릭터의 기본 변수가 동일한 이름을 가진 경우 캐릭터의 기본 변수가 사용됩니다.",
        "combineTranslation": "활성화된 경우, 한 문장이지만 HTML 태그로 분리된 텍스트를 모두 합쳐서 번역한 후, 번역된 결과에 다시 디스플레이 수정 스크립트를 적용합니다.\n이를 통해 번역기가 올바른 번역을 하도록 도와줍니다.\n이 옵션을 활성화하고 UI가 이상해지면 옵션을 끄고 제보해 주세요.",
        "showText": "활성화된 경우, ***** 처럼 가려진 비밀번호나 URL과 같은 문자를 볼 수 있습니다.",
    },
    "setup": {
        "chooseProvider": "AI 제공자를 선택해 주세요",
        "openaikey": "OpenAI & API Key (권장)",
        "openaiProxy": "OpenAI 리버스 프록시",
        "setupmodelself": "그외 / 직접 설정",
        "inputApiKey": "여기에 API 키를 입력해주세요",
        "apiKeyhelp": "이곳에서 API키를 얻을 수 있습니다: ",
        "setupSelfHelp": "첫 셋업 화면이 끝난 뒤, 설정에서 직접 수정해 주세요",
        "theme": "테마를 입력해 주세요",
        "themeDescWifulike": "모바일에 적합하지 않습니다",
        "themeDescWifuCut": "모바일 환경에 적합합니다",
        "themeDescClassic": "Suitable for All devices",
        "texttheme": "텍스트 색상을 선택해주세요",
        "inputName": "마지막으로, 닉네임을 입력해 주세요",
        "welcome": "리스AI에 오신 것을 환영합니다! 저는 셋업 도우미 입니다. 먼저 닉네임을 입력해 주세요.",
        "welcome2": "{username}님 안녕하세요! 시작하기 전에, 몇가지 설정만 하면 됩니다. 먼저, Ai 제공자를 선택해 주세요.",
        "openAIProvider": "OpenAI GPT는 가장 좋은 모델이지만, 유료고 검열이 있습니다.",
        "openrouterProvider": "Openrouter는 여러 무료/유료 모델이 있습니다. 기본적으로 무료로 설정됩니다.",
        "hordeProvider": "Horde는 특별한 설정이 필요없는 무료 모델입니다. 하지만, 성능이 좋지 않습니다.",
        "setProviderLater": "다른 설정을 먼저 하고, 나중에 설정해도 됩니다.",
        "setupOpenAI": "OpenAI를 사용하려면, API키가 필요합니다 \n1. https://beta.openai.com/ 에 접속해주세요. \n2. 로그인 또는 회원가입 해주세요. \n3. https://beta.openai.com/account/api-keys 에 접속해주세요. \n4. 'Create New API Key'를 눌러주세요. \n5. 키 이름은 아무거나 하셔도 괜찮습니다. \n6.생성된 키를 복사해주세요.\n7. 리스AI로 돌아와 주세요.\n8. 입력칸에 붙여넣고, 전송 버튼을 눌러주세요.",
        "setupOpenrouter": "Openrouter를 사용하려면, API키가 필요합니다. \n1. https://openrouter.ai/keys 에 접속하고 로그인 또는 회원가입 해주세요.\n2. 'Create Key'를 눌러주세요. \n3. 키 이름은 아무거나 하셔도 괜찮습니다.\n4. 생성된 키를 복사해주세요.\n5. 리스AI로 돌아와주세요.\n6. 입력칸에 붙여넣고, 전송 버튼을 눌러주세요.",
        "allDone": "모든 설정이 완료되었습니다! 잠시만 기다려주세요."
    },
    "confirm": "확인",
    "goback": "뒤로",
    "botSettings": "봇 설정",
    "model": "모델",
    "apiKey": "API 키",
    "providerURL": "요청 URL",
    "providerJSON": "요청 JSON",
    "mainPrompt": "메인 프롬프트",
    "jailbreakPrompt": "탈옥 프롬프트",
    "globalNote": "글로벌 노트",
    "autoSuggest": "자동 제안",
    "tokens": "토큰",
    "maxContextSize": "최대 콘텍스트 크기",
    "maxResponseSize": "최대 응답 크기",
    "temperature": "온도",
    "frequencyPenalty": "빈도 패널티",
    "presensePenalty": "프리센스 패널티",
    "advancedSettings": "고급 설정",
    "advancedSettingsWarn": "어떤 설정인지 모르겠으면, 만지지 마세요!",
    "formatingOrder": "포맷 순서",
    "authorNote": "작가의 노트",
    "firstMessage": "첫 메시지",
    "description": "설명",
    "jailbreakToggle": "탈옥 토글",
    "charIcon": "캐릭터 아이콘",
    "characterDisplay": "캐릭터 디스플레이",
    "viewScreen": "추가적 캐릭터 스크린",
    "none": "없음",
    "emotionImage": "감정 이미지",
    "noImages": "이미지 없음",
    "noBias": "Bias 없음",
    "image": "이미지",
    "name": "이름",
    "emotion": "감정 이름",
    "value": "값",
    "reroll": "재생성",
    "chatList": "채팅 리스트",
    "removeChat": "이 메시지를 삭제하시겠습니까?",
    "loreBook": "로어북",
    "character": "캐릭터",
    "Chat": "챗",
    "globalLoreInfo": "캐릭터 로어북은 이 캐릭터의 모든 채팅에 적용됩니다.",
    "group": "그룹",
    "groupLoreInfo": "그룹 로어북은 이 그룹의 모든 채팅에 적용됩니다.",
    "localLoreInfo": "챗 로어북은 이 채팅에만 적용됩니다.",
    "removeConfirm": "정말로 삭제하시겠습니까: ",
    "removeConfirm2": "정말로, 정말로 삭제하시겠습니까: ",
    "exportConfirm": "엑스포트하시겠습니까?",
    "insertOrder": "배치 순서",
    "activationKeys": "활성화 키",
    "activationKeysInfo": "\",\"로 나눠주세요",
    "prompt": "프롬프트",
    "loreBookDepth": "로어북 검색 깊이",
    "loreBookToken": "로어북 최대 토큰",
    "removeCharacter": "캐릭터 삭제",
    "removeGroup": "그룹 삭제",
    "exportCharacter": "캐릭터 엑스포트",
    "userSetting": "유저 설정",
    "username": "유저 이름",
    "userIcon": "유저 아이콘",
    "successExport": "성공적으로 엑스포트하여 다운로드 경로에 다운로드했습니다.",
    "successImport": "성공적으로 임포트했습니다.",
    "importedCharacter": "성공적으로 임포트 됨.",
    "alwaysActive": "언제나 활성화",
    "additionalPrompt": "추가 프롬프트",
    "descriptionPrefix": "캐릭터 설명 Prefix",
    "forceReplaceUrl": "리버스 프록시",
    "emotionWarn": "채팅 분석에는 보조 모델을 사용합니다.",
    "plugin": "플러그인",
    "language": "언어",
    "UiLanguage": "UI Language",
    "createfromScratch": "새 캐릭터 생성",
    "importCharacter": "캐릭터 임포트",
    "translator": "번역기",
    "disabled": "비활성화됨",
    "noPluginSelected": "플러그인이 선택되었지만, 플러그인이 없습니다.",
    "text": "텍스트",
    "UISize": "채팅 텍스트 크기",
    "newVersion": "업데이트가 발견되었습니다. 설치하시겠습니까?",
    "display": "소리 및 디스플레이",
    "useCustomBackground": "커스텀 배경",
    "translateInput": "입력창 번역하기",
    "autoTranslation": "자동 번역",
    "fullscreen": "전체 화면",
    "playMessage": "메시지 소리 출력",
    "iconSize": "아이콘 크기",
    "createGroup": "그룹 챗 만들기",
    "groupIcon": "그룹 아이콘",
    "single": "싱글",
    "multiple": "멀티플",
    "useCharLorebook": "캐릭터에 있는 로어 사용",
    "selectChar": "캐릭터 선택",
    "askLoadFirstMsg": "첫 메세지를 불러올까요?",
    "theme": "테마",
    "editOrder": "캐릭터 순서 변경",
    "autoMode": "오토 모드",
    "submodel": "보조 모델",
    "timeOutinSec": "타임아웃 (초)",
    "emotionPrompt": "감정 프롬프트",
    "singleView": "싱글",
    "SpacedView": "멀티플",
    "emphasizedView": "더블",
    "pluginWarn": "플러그인은 기본적으로 분리된 환경에서 실행되지만, 악성 플러그인 설치 시 문제가 생길 수 있습니다.",
    "createGroupImg": "그룹 아이콘 자동생성",
    "waifuWidth": "Waifu 채팅창 넓이",
    "savebackup": "구글 백업 저장",
    "loadbackup": "구글 백업 불러오기",
    "files": "파일",
    "backupConfirm": "정말로 백업을 저장하시겠습니까?",
    "backupLoadConfirm": "정말로 백업을 불러오시겠습니까? 현재 데이터가 모두 사라집니다!",
    "backupLoadConfirm2": "정말로, 정말로 백업을 불러오시겠습니까? 현재 데이터가 모두 사라집니다!",
    "pasteAuthCode": "팝업에서 Auth Code를 복사하여 붙여넣기 해 주세요:",
    "others": "기타",
    "presets": "프리셋",
    "imageGeneration": "이미지 생성",
    "provider": "공급자",
    "key": "키",
    "noData": "데이터 없음",
    "currentImageGeneration": "현재 이미지 생성 데이터",
    "promptPreprocess": "프롬프트 선보정 사용",
    "SwipeRegenerate": "스와이프 리롤 사용",
    "instantRemove": "삭제 시 그 이후 채팅 삭제",
    "instantRemoveConfirm": "메시지 한개만 삭제하시겠습니까? No를 선택할 시, 그 이후 메시지또한 삭제됩니다.",
    "textColor": "텍스트 색상",
    "classicRisu": "클래식 Risu",
    "highcontrast": "고대비",
    "quickPreset": "Ctrl + (프리셋 번호)로 프리셋을 빠르게 변경할 수 있습니다",
    "requestretrys": "실패 시 재요청 횟수",
    "utilityBot": "유틸리티 봇",
    "ShowLog": "리퀘스트 로그 보기",
    "waifuWidth2": "Waifu 캐릭터 크기",
    "sayNothing": "어떤 문자열도 입력되지 않을 시 'say nothing' 입력",
    "regexScript": "정규식 스크립트",
    "type": "타입",
    "editInput": "입력문 수정",
    "editOutput": "출력문 수정",
    "editProcess": "리퀘스트 데이터 수정",
    "loadLatest": "가장 최근 백업 불러오기",
    "loadOthers": "다른 백업 불러오기",
    "exampleMessage": "예시 대화",
    "creatorNotes": "제작자 코멘트",
    "systemPrompt": "시스템 프롬프트",
    "characterNotes": "캐릭터 노트",
    "personality": "성격",
    "scenario": "시나리오",
    "alternateGreetings": "추가 첫 메시지",
    "unrecommended": "비권장",
    "chatNotes": "채팅 노트",
    "showUnrecommended": "비권장 설정 보이기",
    "altGreet": "추가 첫 메시지",
    "scripts": "스크립트",
    "settings": "설정",
    "selective": "멀티플 키",
    "SecondaryKeys": "두번째 키",
    "useGlobalSettings": "글로벌 설정 사용",
    "recursiveScanning": "재귀 검색",
    "creator": "제작자",
    "CharVersion": "캐릭터 버전",
    "Speech": "음성",
    "ToggleSuperMemory": "수파메모리 토글",
    "SuperMemory": "수파메모리",
    "useExperimental": "실험적 요소 보이기",
    "showMemoryLimit": "기억 한계치 보이기",
    "roundIcons": "둥근 아이콘",
    "streaming": "스트리밍",
    "chatBot": "채팅 봇",
    "otherBots": "기타 봇",
    "user": "유저",
    "additionalAssets": "추가 에셋",
    "editDisplay": "디스플레이 수정",
    "community": "커뮤니티",
    "textBackgrounds": "커스텀 채팅창 색깔",
    "textBorder": "텍스트 윤곽선",
    "textScreenRound": "둥근 채팅창",
    "textScreenBorder": "채팅창 윤곽선",
    "ttsReadOnlyQuoted": "따옴표 안 텍스트만 읽기",
    "ttsStop": "TTS 중지",
    "askRemoval": "삭제 확인",
    "replaceGlobalNote": "글로벌 노트 덮어쓰기",
    "charLoreBook": "캐릭터 로어북",
    "globalLoreBook": "글로벌 로어북",
    "globalRegexScript": "글로벌 정규식",
    "accessibility": "접근성",
    "sendWithEnter": "엔터키로 메세지 보내기",
    "clickToEdit": "클릭해서 수정하기",
    "setNodePassword": "보안을 위해 비밀번호를 정해주세요",
    "inputNodePassword": "비밀번호를 입력해주세요. 기억이 안나신다면, save/__password를 지우고 서버를 재시작해주세요.",
    "simple": "간단",
    "advanced": "고급",
    "askReRollAutoSuggestions": "자동 제안 다시 뽑기",
    "creatingSuggestions": "응답 제안 작성 중...",
    "orderByOrder": "순서대로 말하기",
    "removeFromGroup": "정말로 {{char}}을 그룹에서 삭제시키겠습니까?",
    "talkness": "대화량",
    "active": "활성화",
    "loreRandomActivation": "확률 조건 사용",
    "activationProbability": "발동 확률",
    "shareCloud": "Share to RisuRealm",
    "hub": "RisuRealm",
    "tags": "Tags",
    "backgroundHTML": "백그라운드 임베딩",
    "copied": "복사됨",
    "useChatCopy": "채팅 메시지 복사 사용",
    "useChatSticker": "채팅 스티커 사용",
    "useAdditionalAssetsPreview": "추가 에셋 미리보기 사용",
    "autoTranslateInput": "입력 자동 번역",
    "enterMessageForTranslateToEnglish": "영어로 번역할 메시지를 입력해주세요",
    "recent": "Recent",
    "downloads": "Downloads",
    "trending": "Trending",
    "imageCompression": "이미지 압축",
    "notLoggedIn": "Risu Account에 로그인되지 않음",
    "googleDriveInfo": "구글 드라이브에 연동해서 데이터를 동기화하세요.",
    "googleDriveConnection": "구글 드라이브 연동하기",
    "googleDriveConnected": "구글 드라이브 연동됨",
    "SaveDataInAccount": "계정에 데이터 저장",
    "dataSavingInAccount": "계정에 데이터 저장 중",
    "logout": "로그아웃",
    "loadDataFromAccount": "계정에서 데이터 불러오기",
    "saveCurrentDataToAccount": "계정에 데이터 현재 덮어쓰기",
    "chatAssumed": "",
    "proxyAPIKey": "키/패스워드",
    "proxyRequestModel": "요청 모델",
    "officialWiki": "공식 위키",
    "officialWikiDesc": "리스AI의 공식 위키. 자유롭게 보세요.",
    "officialDiscord": "공식 디스코드",
    "officialDiscordDesc": "리스AI에 대해 자유롭게 대화하세요.",
    "confirmRecommendedPreset": "이 모델에 대한 추천 설정이 있습니다. 그걸로 변경하시겠습니까? (접근성 설정에서 물어보는 것을 끌 수 있습니다.)",
    "toggleConfirmRecommendedPreset": "추천 설정 적용 물어보기",
    "recommendedPreset": "권장 설정으로 변경",
    "persona": "페르소나",
    "icon": "아이콘",
    "account": "계정",
    "remove": "삭제",
    "creationSuccess": "생성 성공",
    "noweb": "이 기능은 웹에서는 작동하지 않습니다.",
    "createBotInternet": "인터넷에서 AI로 캐릭터 생성하기",
    "createBotInternetAlert": "캐릭터의 이름과 설명을 입력해주세요.",
    "able": "활성화됨",
    "assetWidth": "에셋 넓이",
    "animationSpeed": "에니메이션 속도",
    "screenshot": "스크린샷",
    "screenshotSaved": "스크린샷 저장됨",
    "inputBotGenerationPrompt": "봇 생성 프롬프트 입력",
    "createBotAI": "OC 봇 생성하기",
    "createBotwithAI": "AI로 캐릭터 생성하기",
    "changeFolderName": "변경할 폴더 이름을 입력해주세요.",
    "cancel": "취소",
    "renameFolder": "폴더 이름 변경하기",
    "changeFolderColor": "폴더 색상 변경하기",
    "fullWordMatching": "단어 단위 매칭",
    "botSettingAtStart": "실행 시 봇 설정으로 시작하기",
    "triggerStart": "채팅 보낼 시",
    "triggerInput": "유저 입력 시",
    "triggerOutput": "봇 출력 시",
    "triggerManual": "수동 트리거",
    "triggerCondVar": "만약 변수",
    "triggerCondExists": "만약 채팅에 텍스트 존재",
    "triggerScript": "트리거 스크립트",
    "triggerMatchRegex": "정규식 매칭",
    "triggerMatchLoose": "느슨한 매칭",
    "triggerMatchStrict": "정확한 매칭",
    "searchDepth": "검색 깊이",
    "equal": "같다면",
    "notEqual": "같지 않다면",
    "greater": "보다 크다면",
    "less": "보다 작다면",
    "greaterEqual": "크거나 같다면",
    "lessEqual": "작거나 같다면",
    "triggerEffSysPrompt": "시스템 프롬프트 추가",
    "triggerEffSetVar": "변수 변경",
    "triggerEffImperson": "채팅 보내기",
    "triggerEffCommand": "커맨드 실행",
    "triggerEffRunTrigger": "트리거 실행",
    "triggerEffStop": "프롬프트 중지",
    "triggerEffCall": "트리거 호출",
    "varableName": "변수 이름",
    "role": "역할",
    "location": "위치",
    "promptstart": "프롬프트 시작",
    "promptend": "프롬프트 끝",
    "historyend": "채팅 끝",
    "always": "언제나",
    "noEffect": "효과 없음",
    "invaildTriggerEffect": "이 효과는 이 트리거 타입에 사용할 수 없습니다.",
    "operator": "연산자",
    "TriggerSetToVar": "변수에 설정",
    "TriggerAddToVar": "변수에 더하기",
    "TriggerSubToVar": "변수에서 빼기",
    "TriggerMulToVar": "변수에 곱하기",
    "TriggerDivToVar": "변수에 나누기",
    "isNull": "값이 없다면",
    "ifChatIndex": "채팅 인덱스가",
    "ifRandom": "만약 랜덤",
    "ifValue": "If Value",
    "hideRealm": "RisuRealm 숨기기",
    "popularityLevel": "{} 인기도",
    "colorScheme": "색상 팔레트",
    "rangeStart": "범위 시작",
    "rangeEnd": "범위 끝",
    "untilChatEnd": "채팅 끝까지",
    "usePromptTemplate": "프롬프트 템플릿 사용",
    "specialType": "특수 타입",
    "noSpecialType": "특수 타입 없음",
    "forceProxyAsOpenAI": "OpenAI 포맷으로 강제",
    "promptTemplate": "프롬프트 템플릿",
    "customInnerFormat": "커스텀 내부 포맷",
    "innerFormat": "내부 포맷",
    "HypaMemory": "하이파메모리",
    "ToggleHypaMemory": "하이파메모리 토글",
    "resetPromptTemplateConfirm": "정말로 프롬프트 템플릿을 초기화하시겠습니까?",
    "emotionMethod": "감정 방식",
    "continueResponse": "응답 계속하기",
    "showMenuChatList": "메뉴에서 채팅 리스트 보이기",
    "translatorLanguage": "번역기 언어",
    "translatorType": "번역기 타입",
    "deeplKey": "deepL API 키",
    "deeplFreeKey": "deepL 무료 API 키",
    "deeplXUrl": "deepLX URL",
    "deeplXToken": "deepLX Token",
    "exportPersona": "페르소나 엑스포트",
    "importPersona": "페르소나 임포트",
    "export": "엑스포트",
    "import": "임포트",
    "supporterThanks": "후원자",
    "supporterThanksDesc": "후원자분들에게 감사합니다!",
    "donatorPatreonDesc": "For default, it will not be shown in the list for privacy. if you want to show your nickname, go to RisuAI's patreon page and press the link button.",
    "useNamePrefix": "이름을 프리픽스로 사용",
    "textAdventureNAI": "텍스트 어드벤쳐로 실행",
    "appendNameNAI": "NAI에서 이름을 텍스트 뒤에 붙이기",
    "customStopWords": "커스텀 정지 단어",
    "defaultPrompt": "기본 프롬프트",
    "additionalText": "추가 디스크립션",
    "seed": "시드",
    "charjs": "캐릭터JS",
    "depthPrompt": "깊이 프롬프트",
    "largePortrait": "세로 이미지",
    "lorePlus": "로어북+",
    "reverseProxyOobaMode": "Ooba 모드",
    "joinMultiUserRoom": "멀티 유저 룸 참가",
    "exactTokens": "정확 토큰",
    "fixedTokens": "대략적 토큰",
    "inlayViewScreen": "인레이 스크린",
    "imgGenPrompt": "이미지 생성 프롬프트",
    "imgGenNegatives": "이미지 생성 네거티브 프롬프트",
    "imgGenInstructions": "이미지 생성 지시사항",
    "usePlainFetchWarn": "NovelAI 사용 시 CORS 오류가 발생할 수 있으므로, NovelAI를 사용할 때는 이 옵션을 비활성화해 주세요.",
    "translationPrompt": "번역 프롬프트",
    "translationResponseSize": "번역 응답 크기",
    "webdeeplwarn": "이 옵션은 웹에서는 제대로 작동하지 않을 수 있습니다.",
    "saveBackupLocal": "로컬 백업 저장",
    "loadBackupLocal": "로컬 백업 불러오기",
    "topP": "Top P",
    "genTimes": "생성 횟수",
    "cot": "생각의 사슬",
    "forcePlainFetch": "직접 요청 보내기",
    "autoFillRequestURL": "요청 URL 자동 채우기",
    "newOAIHandle": "새로운 OpenAI 방식 적용",
    "oaiRandomUser": "OAI 랜덤 유저 사용",
    "inlayImage": "인레이 이미지",
    "nativeAutomark": "실험적 네이티브 오토마크 사용",
    "assistantPrefill": "어시스턴트 프리필",
    "postEndInnerFormat": "엔드 뒤 프롬프트",
    "sendChatAsSystem": "시스템으로 채팅 보내기",
    "sendName": "그룹챗 밖에서도 이름 붙이기",
    "utilOverride": "유틸리티 덮어쓰기",
    "template": "템플릿",
    "chatAsOriginalOnSystem": "기존 역할로 보내기",
    "exportAsDataset": "데이터셋으로 세이브 엑스포트",
    "editTranslationDisplay": "번역문 수정",
    "selectModel": "모델 선택",
    "autoRemoveThoughtTag": "Thought 태그 자동 제거",
    "customChainOfThought": "커스텀 생각의 사슬",
    "maxThoughtTagDepth": "Thought 태그 최대 깊이",
    "openrouterFallback": "Openrouter 폴백",
    "openrouterMiddleOut": "Openrouter 미들 아웃",
    "geminiApiKey": "Gemini API Key",
    "removePunctuationHypa": "장기기억 내 문장부호 제거",
    "memoryLimitThickness": "기억 한계선 두께",
    "inputCardPassword": "카드 비밀번호 입력",
    "ccv2Desc": "Character Card V2은 챗봇 프로그램에서 자주 사용되는 포맷입니다.",
    "ccv3Desc": "Character Card V3은 발전된 기능을 제공하는 포맷입니다.",
    "realmDesc": "RisuRealm은 다양한 캐릭터를 공유하고, 다른 사용자의 캐릭터를 사용할 수 있는 플랫폼입니다.",
    "rccDesc": "미사용",
    "password": "비밀번호",
    "license": "라이센스",
    "licenseDesc": "라이센스는 다른 사용자가 이 캐릭터를 사용할 수 있는지 결정합니다.",
    "passwordDesc": "비밀번호를 설정하여 다른 사용자의 접근을 제한할 수 있습니다.",
    "largePersonaPortrait": "페르소나 세로 이미지",
    "module": "모듈",
    "modules": "모듈",
    "noModules": "모듈이 없습니다.",
    "createModule": "모듈 생성",
    "basicInfo": "기본 정보",
    "moduleContent": "모듈 내용",
    "confirmRemoveModuleFeature": "정말로 이 기능을 삭제하시겠습니까?",
    "editModule": "모듈 수정",
    "importModule": "모듈 임포트",
    "download": "다운로드",
    "edit": "수정",
    "enableGlobal": "글로벌 활성화",
    "chatModulesInfo": "모듈을 이 채팅 한정으로 활성화/비활성화합니다.",
    "sideMenuRerollButton": "사이드 메뉴 리롤 버튼",
    "persistentStorage": "영구 저장소",
    "persistentStorageSuccess": "저장소가 영구적으로 설정되었습니다.",
    "persistentStorageFail": "저장소 설정에 실패했습니다. 브라우저에서 거부되었을 수 있습니다.",
    "persistentStorageRecommended": "영구 저장소 권장됨",
    "persistentStorageDesc": "당신의 브라우저는 영구 저장소를 지원합니다. 이 기능을 활성화하면, 데이터가 브라우저에 더 오래 남습니다.",
    "enable": "활성화",
    "postFile": "파일 업로드",
    "requestInfoInsideChat": "채팅 내부에서 요청 정보 보이기",
    "inputTokens": "입력 토큰",
    "outputTokens": "출력 토큰",
    "tokenWarning": "토큰 계산은 정확하지 않을 수 있습니다. 참고용으로만 사용해주세요.",
    "log": "로그",
    "popularityLevelDesc": "인기도는 이 캐릭터가 얼마나 인기 있는지를 나타냅니다. 여러가지 요소가 영향을 미칩니다.",
    "additionalParams": "추가 파라미터",
    "heightMode": "높이 모드",
    "useAdvancedEditor": "고급 에디터 사용",
    "noWaitForTranslate": "번역 기다리지 않기",
    "updateRealm": "RisuRealm에 업데이트하기",
    "updateRealmDesc": "당신은 이 캐릭터를 RisuRealm에 업데이트 하려고 합니다. 이 작업은 취소할 수 없습니다.",
    "antiClaudeOverload": "Claude 오버로드 방지",
    "activeTabChange": "현재 탭이 비활성화되었습니다. OK를 누르면 탭이 다시 활성화됩니다.",
    "maxSupaChunkSize": "최대 수파메모리 청크 크기",
    "addCharacter": "캐릭터 추가",
    "importFromRealm": "RisuRealm에서 고르기",
    "importFromRealmDesc": "여러 캐릭터들이 공유된 RisuRealm에서 캐릭터를 고르세요.",
    "random": "랜덤",
    "metaData": "메타데이터",
    "autoContinueMinTokens": "타켓 토큰 (자동 컨티뉴)",
    "autoContinueChat": "불완전 문단 방지 (자동 컨티뉴)",
    "removeIncompleteResponse": "불완전 문단 제거",
    "tokenizer": "토크나이저",
    "chatFormating": "채팅 포맷",
    "useInstructPrompt": "인스트럭트 프롬프트 사용",
    "hanuraiMemory": "하느라이메모리",
    "playground": "플레이그라운드",
    "textAreaSize": "텍스트 영역 크기",
    "textAreaTextSize": "텍스트 영역 텍스트 크기",
    "sideBarSize": "사이드바 크기",
    "embedding": "임베딩",
    "syntax": "문법",
    "run": "실행",
    "noMessage": "무언가 입력하여 채팅을 시작하세요.",
    "combineTranslation": "결합 번역",
    "dynamicAssets": "다이나믹 에셋",
    "dynamicAssetsEditDisplay": "디스플레이 수정에 다이나믹 에셋 사용",
    "longTermMemory": "장기기억",
    "grid": "그리드",
    "list": "리스트",
    "trash": "휴지통",
    "trashDesc": "삭제된 캐릭터는 휴지통에 보관됩니다. 복구하거나 영구 삭제할 수 있습니다. 3일 후에는 자동으로 영구 삭제됩니다.",
    "shareExport": "공유/엑스포트",
    "risupresetDesc": "Risupreset 포맷은 포맷을 공유하기 위한 RisuAI 전용 포맷입니다.",
    "jsonDesc": "JSON은 데이터를 저장하고 불러오기 위한 일반적인 포맷입니다.",
    "nickname": "닉네임",
    "useRegexLorebook": "정규식 사용",
    "customPromptTemplateToggle": "커스텀 토글",
    "defaultVariables": "기본 변수",
    "hypaAllocatedTokens": "할당 토큰",
    "hypaChunkSize": "청크 크기",
    "hypaV2Desc": "하이파메모리 V2는 벡터 검색과 요약을 둘 다 사용하는 장기기억 시스템입니다.",
    "supaDesc": "수파메모리는 요약을 사용하는 장기기억 시스템입니다.",
    "hanuraiDesc": "하느라이메모리는 벡터 검색을 사용하는 장기기억 시스템입니다.",
    "v2Warning": "주의: V2 카드는 더 이상 지원되지 않습니다. 일부 데이터가 누락될 수 있습니다.",
    "showText": "가려진 문자 보기",
}