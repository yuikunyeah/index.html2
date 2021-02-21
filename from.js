<!-- class, action, methodを変更しないでください -->
<form class="formrun" action="https://form.run/@yuikun-yeah-github-pages" method="post">
  <!-- ↓自由に要素を追加・編集することができます -->
  <div>
    <label>お名前</label><br>
    <input name="お名前" type="text">
  </div>
<br>
  <div>
    <label>メールアドレス [必須]</label><br>
    <input name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required><br>
    <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
  </div>
<br>
  <div>
    <label>お問い合わせ [必須]</label><br>
    <textarea name="お問い合わせ" data-formrun-required></textarea><br>
    <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div>
  </div>
<br>
  <div>
    <label>個人情報利用同意 [必須]</label><br>
    <input type="checkbox" name="個人情報利用同意" data-formrun-required><br>
    <div data-formrun-show-if-error="個人情報利用同意">同意してください</div>
  </div>
<br>
  <!-- ボット投稿をブロックするためのタグ -->
  <div class="_formrun_gotcha">
    <style media="screen">._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}</style>
    <label for="_formrun_gotcha">If you are a human, ignore this field</label>
    <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabindex="-1">
  </div>

  <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
</form>

