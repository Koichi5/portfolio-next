-- AboutProfile
insert into
    "AboutProfile" (name, value)
values
    ('Name', '岸本 浩一智 ( Kishimoto Koichi )'),
    ('Belonging', '関西大学経済学部'),
    ('Speciality', 'モバイルアプリケーション開発')

-- AboutMyHistory
insert into
    "AboutMyHistory" (date, value)
values
    ('2021. 4', '関西大学入学'),
    ('2021. 11', 'プログラミング（Web制作）を本格的に学習開始'),
    ('2021. 12', 'ビジネスコンテスト「ミライノピッチ」で企業賞複数受賞'),
    ('2021. 12', '丸井グループ最年少アクセラレーター選出'),
    (
        '2022. 2 - 2022. 10',
        '株式会社Voteee Technologies にて Flutter のプログラミング講師としてインターンを経験'
    ),
    ('2022. 3', '起業家甲子園近畿地方代表、企業賞複数受賞'),
    ('2022. 8 - 2023. 3', '関西大学の社会課題解決プログラム「山岡塾」に参加'),
    ('2023. 2', '関西ビギナーズハッカソンにて優良賞受賞'),
    (
        '2023. 2 - 2023. 4',
        '株式会社Wanderlust にて Flutter エンジニアとしてチーム開発を経験'
    ),
    (
        '2023. 4',
        'Flutter を用いた個人開発で情報科目学習サポートアプリ「Tech Journey」を Google Play ストアへリリース'
    ),
    (
        '2023. 5 -',
        '株式会社はんぽさき にて Flutter エンジニアとしてチーム開発を経験'
    ),
    (
        '2023. 7',
        'Swift を用いた個人開発で買い物サポートアプリ「買い物ナビ」を App Store へリリース'
    ),
    (
        '2023. 8',
        '株式会社 Sansan の 「Sansan Tech Internship SPARK2023」に参加し'
    ),
    ('2023. 10', '株式会社 リクルート のサマーインターンに参加')

-- SkillLanguageProficiency
insert into
    "SkillLanguageProficiency" (name, proficiency)
values
    ('Dart', 5),
    ('Swift', 4),
    ('Python', 4),
    ('JavaScript', 3),
    ('TypeScript', 3),
    ('R', 1),
    ('Unity', 1)

-- SkillFrameworkProficiency
insert into
    "SkillFrameworkProficiency" (name, proficiency)
values
    ('Flutter', 5),
    ('SwiftUI', 4),
    ('React', 3),
    ('Numpy', 3),
    ('Pandas', 3),
    ('TensorFlow', 2),
    ('UIKit', 2),
    ('Reality Componser Pro', 2),
    ('ARKit', 2)

-- SkillOtherProficiency
insert into
    "SkillOtherProficiency" (name, proficiency)
values
    ('Firebase', 4),
    ('GitHub', 4),
    ('Slack', 4),
    ('Figma', 3),
    ('Canva', 3),
    ('Blender', 3)

-- Work
insert into
    "Work" (
        title,
        attribute,
        imagePath,
        detail,
        point,
        tech,
        workSources,
    )
values
    (
        'Tech Journey',
        '個人開発',
        'https://lh3.googleusercontent.com/pw/AIL4fc9NqE87qGHvw3qNHeXrVd8AJlWQs4NuiRbvhFcPdx4Dh7msvEoAlzog0lyECoKOa9PJoPek9qUZK_DFpdoD12pJqUyRs8EbwVEC929DcbEZPVGgv7odbkVdi2Ecd8zsTEKo4F11DWzNiYw-LZLHbEtE=w500-h500-s-no?authuser=0',
        '2025年から大学入学共通テストの必須科目に追加される「情報」に関する学習をサポートするためのクイズアプリ。自分自身がプログラミングについて学び、その楽しさに気づいたため、同じように情報やプログラミングについて面白さを感じる人を一人でも増やしたいと感じたため開発しました',
        'FlutterとFirebaseを用いて初めて開発したアプリで、クイズを解くだけでなく、ユーザーがクイズを作成したり、苦手な問題を記録して復習したりする機能を加えるのに苦労しました',
        'Dart,  Flutter,  Firebase',
        []
    ),
    (
        '買い物ナビ',
        '個人開発',
        'https://lh3.googleusercontent.com/pw/AIL4fc9oiPIUTQGK1cIv5y-BHTSrK6ycid0nuaM9Ix07oi-SG1c07gQA9uuRfoXq2R21X2igFriiLbcKIXPvm7Ky_a5Y5SqmBLtvHA2ujYhYdggc5Vg-5PSD1dpkdqFbox47_DJkYynkV8yAuIr2OfnPqqS8=w500-h500-s-no?authuser=0',
        '自分自身が一人暮らしで買い物をする際、よく買い忘れをするため、それを防ぐためのアプリを開発しました',
        'Swift、SwiftUIとFirebaseを用い開発したアプリで、プッシュ通知の機能やECサイトのリンクをダイレクトに開く機能、Lottieを用いたアニメーションを実装しました',
        'Swift,  SwiftUI,  Firebase',
        []
    ),
    (
        '株式会社 Voteee Technologies',
        'インターン',
        'https://lh3.googleusercontent.com/pw/AIL4fc_ZcRR5bjgk34v2DkIQTlswvkvoLQCG4wNH6u7VxIDg2WkMslNXpEjwE8ENHh72He2nTSniTZEf2VQFyAA8kl8LddTD4Vy-1v5iTOOYTWWmbemIdK2mVVypn61kpIK9FUHi0ERHn5L0VnEBqXvqEJ5z=w940-h788-s-no?authuser=0',
        '2022年2月から10月の8ヶ月間、株式会社 Voteee Technologiesにて、 Flutterコースのプログラミングスクール講師を務めました',
        'Flutterコースの責任者兼講師として教材作成と講義を担当しました。「質問の来ないくらいわかりやすい教材」を目指して、自身のFlutter の学習と同時並行で教材作成を行うことで、徹底的に初学者に寄り添った内容にするよう心がけて作成しました。また、Qiita等を活用して外部への発信活動も積極的に行いました。この経験を通して私は、他の人に技術を教えることの難しさと発信活動の大切さを学びました。この経験を活かして、人を指導する立場に立った場合は相手の視点に立って考え、相手はが何が分からないのかを考えるよう心がけようと感じました',
    ),
    (
        '株式会社 Wanderlust',
        '開発インターン',
        'https://lh3.googleusercontent.com/pw/AIL4fc-_806pvebSbxWLCDzb5Unl3bfke7nWYargwcisFkuWsLEGVYWfn3F34YhcThKnY56iv19cRfxi3Bow4kffapVqjkIGl9PawpGjd4eEiA-7bO27PN4xXWuzbHrlA-isYULS0WV9jglj9VSOrzf23zkw=w867-h739-s-no?authuser=0',
        '2023年2月から5月までの3ヶ月間モバイルアプリケーションエンジニアとして、Flutterを用いて、位置情報共有アプリLocketの開発に携わりました',
        '主な業務内容としては、新機能の追加やバグ修正、UI修正などです。この経験を通して、非常にスピードの速い開発、ユーザーや競合他社の動向に応じて機能を変更する柔軟性のある開発、英語を用いた開発を経験することができました',
    ),
    (
        '株式会社 はんぽさき',
        '開発インターン',
        'https://lh3.googleusercontent.com/pw/AIL4fc92rp_sz3SdziwfYnM1EzN23uw9uhiSmgW7OesmAahfbbOLMMcoJcwXWuhq-EKQTsG89jeJv2wzAB2KauynOmw8soJY94s68x2xY5rwPI_qF7tYLZm_o7QF0AIiGvE76bjLrXXuQme9KZhqzSOAbO9-=w940-h788-s-no?authuser=0',
        '2023年5月までのモバイルアプリケーションエンジニアとして、Flutterを用いて、地図アプリLivMapの開発に携っています',
        '現在継続中のインターンであり、主な業務内容としては、新機能の追加やバグ修正、UI修正などです。また、Provider から Riverpod への移行なども行いました',
    ),
    (
        '株式会社 Sansan',
        'サマーインターン',
        'https://lh3.googleusercontent.com/pw/AIL4fc-akDhqRph2SiGD1R2ilN2sEbEs78bkpSMsDdEEW3jfpk_XgPSdQzFhmoamIDRbFmPANnZSt7tBRGu9Bu8WwjQg6xJ6FIQr_EaNwkFU8ka5NLs6_PblsmXhg-7L_gSwUOSDzrDKAWRG6skAnDXRKZw7=w1200-h667-s-no?authuser=0',
        '2023年8月から「Sansan Tech Internship SPARK2023」に参加しました',
        '座学ではプロダクト開発におけるジョブ理論の考え方やアジャイル開発、スクラム開発の基本などエンジニアとして必要な知識を身につけることができました。 \n 後半の開発期間ではFlutterを用いた開発を行い、主にフロントエンドを担当しました。\n開発では、他のメンバーと開発することでJiraを用いたタスクの管理やコードレビュー、開発に役立つTipsなど様々なことを学ぶことができました',
    ),
    (
        '株式会社 リクルート',
        '就業型サマーインターン',
        '2023年10月から1ヶ月半ほど参加しました',
        '詳細については公表できませんが、今まで触れていなかった技術に触れることができました。メンターさんやメンバーの方々の支えもあり、いろいろな方のお話を伺うことができ、今後の開発の軸になるような考え方も得られ、非常に貴重な経験でした',
    )

-- ContactEmailAndPhone
insert into
    "ContactEmailAndPhone" (name, value)
values
    ('Email', 'koichi20021217@gmail.com'),
    ('Phone', '080-4558-9517')

-- ContactOthers
insert into
    "ContactOthers" (contactName, accoutName, accountUrl)
values
    (
        'Twitter',
        'koichi_mobile',
        'https://twitter.com/koichi_mobile'
    ),
    (
        'Zenn',
        'koichi_51',
        'https://zenn.dev/koichi_51'
    ),
    (
        'Qiita',
        'KKoichi51',
        'https://qiita.com/KKoichi51'
    ),
    (
        'GitHub',
        'Koichi5',
        'https://github.com/Koichi5'
    )