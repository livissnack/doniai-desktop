<template>
  <div class="email">
    <div class="ls-email-title">
      <h4>筱邮箱</h4>
    </div>
    <div id="mail-app" class="columns">
      <aside class="aside hero is-fullheight">
        <div>
          <div class="compose has-text-centered">
            <a class="button is-danger is-block is-bold"
              ><span class="compose">新建邮件</span></a
            >
          </div>
          <div class="main">
            <a href="#" class="item active"
              ><span class="icon"><i class="fa fa-inbox"></i></span
              ><span class="name">收件箱</span></a
            >
            <a href="#" class="item"
              ><span class="icon"><i class="fa fa-star"></i></span
              ><span class="name">收藏夹</span></a
            >
            <a href="#" class="item"
              ><span class="icon"><i class="fa fa-envelope"></i></span
              ><span class="name">发件箱</span></a
            >
            <a href="#" class="item"
              ><span class="icon"><i class="fa fa-folder"></i></span
              ><span class="name">文件夹</span></a
            >
          </div>
        </div>
      </aside>
      <div class="message-feed messages hero is-fullheight">
        <div class="action-buttons">
          <div class="control is-grouped">
            <a class="button is-small"><i class="fa fa-chevron-down"></i></a>
            <a class="button is-small"><i class="fas fa-sync-alt"></i></a>
          </div>
          <div class="control is-grouped">
            <a class="button is-small"><i class="fa fa-inbox"></i></a>
            <a class="button is-small"
              ><i class="fa fa-exclamation-circle"></i
            ></a>
            <a class="button is-small"><i class="fa fa-trash"></i></a>
          </div>
        </div>
        <div id="inbox-messages" class="inbox-messages">
          <div id="msg-card-0" data-preview-id="0" class="card active">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"><small>From: Marjorie Howe</small></span>
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1"
                    >Voluptas maiores omnis.</strong
                  ></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Recusandae molestias necessitatibus. Molestias ut voluptatem
                  nisi accusamus nostrum. Nesciunt ad et neque pariatur amet et.
                  Repellat distinctio soluta ipsum alias commodi necessitatibus
                  delectus.
                </p>
              </div>
            </div>
          </div>
          <div id="msg-card-1" data-preview-id="1" class="card">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"><small>From: Lucile Littel</small></span>
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1"
                    >Repudiandae reprehenderit a voluptate mi</strong
                  ></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Autem aut non rem. Quia amet deleniti molestiae quaerat
                  dolores. Voluptate voluptatem similique nulla nihil.
                </p>
              </div>
            </div>
          </div>
          <div id="msg-card-2" data-preview-id="2" class="card">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"
                  ><small>From: Griffin Hammes</small></span
                >
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1"
                    >Mollitia neque reiciendis facilis molest</strong
                  ></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Aut blanditiis sit. Libero perspiciatis blanditiis. Sed enim
                  ducimus consectetur. Nihil magni qui aperiam ut tempora. Sint
                  dolorem et sit.
                </p>
              </div>
            </div>
          </div>
          <div id="msg-card-3" data-preview-id="3" class="card">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"
                  ><small>From: Michelle Nicolas</small></span
                >
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1"
                    >Fugit porro iure quia impedit.</strong
                  ></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Corporis odio repellat. Et eius ipsam nobis. Dicta iusto
                  consequatur rem esse.
                </p>
              </div>
            </div>
          </div>
          <div id="msg-card-4" data-preview-id="4" class="card">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"
                  ><small>From: Orpha Schulist II</small></span
                >
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1"
                    >Porro est quaerat ut explicabo.</strong
                  ></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Ut voluptas nulla adipisci quidem praesentium. Quisquam
                  necessitatibus sed at sapiente.
                </p>
              </div>
            </div>
          </div>
          <div id="msg-card-5" data-preview-id="5" class="card">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"
                  ><small>From: Dillan Mosciski</small></span
                >
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1"
                    >Rerum temporibus consequuntur corrupti e</strong
                  ></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Perspiciatis ipsa placeat perspiciatis ducimus rem. Eos
                  numquam est.
                </p>
              </div>
            </div>
          </div>
          <div id="msg-card-6" data-preview-id="6" class="card">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"><small>From: Karina Crooks</small></span>
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1">Nemo sed adipisci.</strong></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Laboriosam occaecati quae accusantium odit corrupti eos hic
                  qui molestias. Ut minima nihil velit qui ut saepe. Voluptas
                  maiores autem amet aut eligendi ullam adipisci quod maxime.
                </p>
              </div>
            </div>
          </div>
          <div id="msg-card-7" data-preview-id="7" class="card">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"><small>From: Pete Yost</small></span>
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1"
                    >Eos et molestiae quisquam nihil sit porr</strong
                  ></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Quaerat corporis molestiae deleniti explicabo ex sit error.
                  Quia veritatis vitae non veniam quia qui. Cumque nemo dolore
                  laboriosam hic dolor possimus. Illo eum inventore optio aut
                  consequatur eos ea consequatur. Et eius aut corporis illo qui
                  debitis modi ut quis.
                </p>
              </div>
            </div>
          </div>
          <div id="msg-card-8" data-preview-id="8" class="card">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"><small>From: Cyrus Kirlin</small></span>
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1"
                    >Facere sunt ex qui consequatur optio qua</strong
                  ></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Veritatis explicabo qui rerum voluptatem blanditiis mollitia
                  autem. Laboriosam at eveniet dolor qui et. At rerum voluptatem
                  dicta qui eveniet consequuntur.
                </p>
              </div>
            </div>
          </div>
          <div id="msg-card-9" data-preview-id="9" class="card">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"
                  ><small>From: Catherine Lind</small></span
                >
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1"
                    >Eaque et ut tempore nulla tempore tempor</strong
                  ></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Fugiat quaerat dolor omnis quisquam eius ut vel. Autem
                  blanditiis consequatur dolore in. Dolores est dolorem totam
                  temporibus nam. Dolorem et praesentium. Ut recusandae vero
                  sequi et voluptates consequatur autem vero.
                </p>
              </div>
            </div>
          </div>
          <div id="msg-card-10" data-preview-id="10" class="card">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"
                  ><small>From: Mr. Kyleigh Stracke</small></span
                >
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"
                  ><i class="fa fa-paperclip"></i
                ></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"
                  ><strong id="fake-subject-1"
                    >Quia repellat nemo sapiente est voluptas</strong
                  ></span
                >
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">
                  Ut dolores vitae adipisci nihil reiciendis nemo. Enim eligendi
                  nihil rem enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="message-pane" class="message-pane message hero is-fullheight">
        <div class="action-buttons">
          <div class="control is-grouped">
            <a class="button is-small"><i class="fa fa-inbox"></i></a>
            <a class="button is-small"
              ><i class="fa fa-exclamation-circle"></i
            ></a>
            <a class="button is-small"><i class="fa fa-trash"></i></a>
          </div>
          <div class="control is-grouped">
            <a class="button is-small"
              ><i class="fa fa-exclamation-circle"></i
            ></a>
            <a class="button is-small"><i class="fa fa-trash"></i></a>
          </div>
          <div class="control is-grouped">
            <a class="button is-small"><i class="fa fa-folder"></i></a>
            <a class="button is-small"><i class="fa fa-tag"></i></a>
          </div>
        </div>
        <div class="box message-preview">
          <div class="top">
            <div class="avatar">
              <img src="../assets/avatar.jpg" alt="图像logo"/>
            </div>
            <div class="address">
              <div class="name">管欣</div>
              <div class="email">brucesnack@gmail.com</div>
            </div>
            <hr />
            <div class="content">
              <p>
                Ipsum consequuntur pariatur explicabo placeat. Aspernatur
                ratione dolorem ea ut nihil voluptas exercitationem mollitia
                voluptates. Voluptatem doloremque est voluptas velit quod
                eligendi nulla. Earum dolores ut facilis illo odio. Sit ea ad
                necessitatibus porro aliquid ut minus. Magni in in laboriosam
                impedit accusantium impedit hic ducimus. Laborum nam magni
                repellat ullam beatae. Omnis natus vero ratione itaque vero
                facilis asperiores dolorem. Enim rem voluptatem in ratione est
                perferendis rerum facere. Repellat et ut necessitatibus facere
                qui iusto nostrum. Distinctio quisquam et quo. Sit est itaque
                repudiandae repudiandae quis vero. Aliquam commodi quam ab
                consectetur consequatur accusantium facere. Ut voluptas ut
                facilis quis. Nam modi consequuntur quos voluptatem ipsa eius
                sint nihil voluptatem. Qui dolorum voluptatem id est
                exercitationem animi. Illum voluptatem ullam non sint iure et
                aperiam. Enim veniam quia ipsa iusto. Sed rerum totam itaque qui
                commodi. Ea maiores earum et voluptates et eligendi. Ea
                molestiae eos ex debitis sed quo perferendis et ut. Et dolorem
                molestias. Doloremque placeat aspernatur delectus. Voluptatibus
                ipsam voluptate delectus illo fugiat. Quam labore vero
                perspiciatis. Et corporis rerum ab iste nulla. Aliquid ut rerum
                sed facere iure repellendus sunt atque. Et velit eos fugiat.
                Dolor ratione omnis et. Accusamus rerum eos saepe beatae est
                quas. Illo nemo beatae provident occaecati magnam expedita vel
                voluptates iure. Cum vel quasi. Nihil et nam sapiente labore aut
                et. Unde corporis autem voluptatem non perferendis unde. Non in
                repellendus voluptatem et enim pariatur sint sit. Fugit maxime
                accusantium odio. Saepe quia ullam quis. Ex repellendus
                dignissimos possimus dicta nostrum dolorum ratione et. Voluptas
                autem rerum et unde magni. Ea aperiam praesentium ipsam ipsum
                dolorem beatae eum et. At est quibusdam quae fuga cupiditate
                qui. Et magni sit voluptas dolores voluptatibus aut voluptatem
                quo numquam. Eius sit voluptas quibusdam. Voluptatem nisi
                aliquam sint autem corporis repellendus corrupti. Est
                reprehenderit est incidunt autem dolorum. Repudiandae blanditiis
                quae libero earum fugiat sunt odio omnis et. Qui iure et
                doloremque. Optio illum neque totam qui provident quo sunt
                suscipit velit. Tenetur ut a totam. Nobis beatae at in. Velit
                quis est dolorem animi eveniet impedit exercitationem ipsam
                error. Dicta debitis laboriosam veniam aspernatur qui quo. Omnis
                quidem illum harum omnis ad dolores consequuntur vel. Ab
                reiciendis voluptatem cum eos illo id accusantium. Consequuntur
                optio aperiam qui odit corporis qui. Dolores expedita
                consequatur voluptatem. Dolorum laudantium nisi quam a accusamus
                exercitationem qui. Ea mollitia distinctio quo nihil saepe
                voluptas vero soluta saepe. Autem asperiores rerum delectus qui
                corrupti minus rem. Aut vel veniam fugit corrupti excepturi ab.
                Enim autem ea iusto est iusto labore. Repudiandae ea deserunt
                natus possimus. Voluptas cumque officia omnis corrupti occaecati
                ipsam. Laborum consequatur voluptates dolorum ex mollitia alias
                harum rerum. Omnis nesciunt provident sapiente. Qui explicabo
                earum consequatur est expedita adipisci aperiam et. Aspernatur
                quidem error totam accusantium sit ut earum saepe. Nisi esse
                necessitatibus ut omnis qui veritatis officiis. Quidem labore
                recusandae modi. Eligendi nesciunt quis. Recusandae et quo atque
                autem tempore expedita aut. Aut est aliquam quia dolores
                temporibus est ab quas assumenda. Libero nesciunt maxime est
                rerum molestiae ab quis. Dolor est quo quia voluptatem iste
                iusto incidunt. Ut fuga ut eveniet rerum vitae sunt. Quidem sed
                omnis repellendus quia et. Quos provident eos et optio et
                perferendis. Illo tenetur ullam quia voluptatem et id animi.
                Libero eum est possimus nostrum aut dolore velit et. Ut
                laudantium voluptatem qui. Sint aliquid omnis ut esse eaque quo
                sunt sint neque. Maiores a dolorem et et. Voluptatem unde
                voluptate est. Quia voluptates deserunt placeat. Quas voluptas
                repudiandae. Culpa perferendis numquam ut quaerat dolor. Itaque
                deserunt quia consectetur. Quod quae maxime assumenda dolorem
                cum sit aliquid. Tempore dolores aut ipsa quidem deserunt magnam
                omnis deleniti. Ut neque a quibusdam ut. Nam et omnis qui et
                adipisci et autem alias. Non numquam ab molestiae consequuntur
                sapiente accusantium minus qui hic. Officiis delectus error aut
                eos non assumenda at molestias rerum. Vero necessitatibus quis
                dolores sint qui soluta ut et. Sed ea et error perspiciatis
                perspiciatis hic nemo voluptates. Id est molestias qui aliquam
                vitae alias sunt non est. Repellendus itaque sint. Blanditiis
                quia quas eaque ducimus dolores aspernatur quod. Labore expedita
                atque iste est. Quos expedita et id dolorem. Sapiente molestias
                aut consequatur quia aut in ut odio natus. Consequatur fugiat
                odit sequi minima enim ea aliquid necessitatibus. Quam assumenda
                id veniam consequatur. At quo ut saepe. Nulla repellendus autem
                rem consequuntur nisi beatae. Harum sed nihil ut nemo sunt non.
                Quas nisi repellat officiis repudiandae odit qui in beatae quo.
                Laboriosam sapiente mollitia voluptatem at nostrum. Reiciendis
                impedit libero doloremque quidem dolore id iure. Qui cumque hic
                facere harum eius iure fugit. Alias porro aut omnis voluptas
                molestias et voluptates inventore optio. Pariatur necessitatibus
                iste at at dignissimos rerum. Sequi repellendus repudiandae
                ipsam. Est non et. Optio sunt facere itaque reprehenderit saepe.
                Sit assumenda nobis ratione totam ipsum veritatis est et
                aperiam. Ab molestiae repellat porro temporibus commodi quae.
                Rem debitis qui dolorem nihil quia nihil eius. Nemo aut
                accusamus non accusamus quidem tempora occaecati et. Ea quia
                odit omnis eos consectetur. Dolores aliquam id. Molestiae
                expedita vel. Qui delectus qui rerum in. Rem et quia sint nobis
                quo commodi. Consequatur hic aut ullam asperiores natus ad iste
                et. Ut accusantium qui temporibus deserunt quasi aut. In
                officiis nam nemo. Eligendi dolores porro adipisci similique
                reiciendis ex et. Repellendus ex voluptatem omnis dignissimos
                amet. Vel et animi. Eos dolores porro et nam blanditiis. Vel
                blanditiis quisquam voluptas eveniet sint aliquam velit
                delectus. Sunt veniam fugit corrupti sit veritatis. Et
                voluptatem in. Eum nihil ut officiis. Ratione doloremque iure
                recusandae porro aliquam rerum. Eum voluptatem autem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Email',
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.aside {
  display:block;
  width: 240px;
  background-color: #F9F9F9;
  border-right: 1px solid #DEDEDE;
}

.message-feed {
  width: 30%;
}

.message-pane {
  width: 70%;
}

.columns {
  margin: 0;
}

.ls-email-title {
  height: 60px;
  border: 1px solid #cecece;
  padding: 10px 0 20px 20px;
  h4 {
    font-size: 18px;
    font-weight: bold;
    color: #4a4a4a;
  }
}

.messages {
  display:block;
  background-color: #fff;
  border-right: 1px solid #DEDEDE;
  padding: 40px 20px;
}
.message {
  display:block;
  background-color: #fff;
  padding: 40px 20px;
}
.aside .compose {
  height: 95px;
  margin:0 -10px;
  padding: 25px 30px;
}
.aside .compose .button {
  color: #F6F7F7;
}
.aside .compose .button .compose {
  font-size: 14px;
  font-weight: 700;
}
.aside .main {
  padding: 40px;
  color: #6F7B7E;
}
.aside .title {
  color: #6F7B7E;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}
.aside .main .item {
  display: block;
  padding: 10px 0;
  color: #6F7B7E;
}
.aside .main .item.active {
  background-color: #F1F1F1;
  margin: 0 -50px;
  padding-left: 50px;
}
.aside .main .item:active,.aside .main .item:hover {
  background-color: #F2F2F2;
  margin: 0 -50px;
  padding-left: 50px;
}
.aside .main .icon {
  font-size: 19px;
  padding-right: 30px;
  color: #A0A0A0;
}
.aside .main .name {
  font-size: 15px;
  color: #5D5D5D;
  font-weight: 500;
}
.messages .action-buttons {
  padding: 0;
  margin-top: -20px;
}
.message .action-buttons {
  padding: 0;
  margin-top: -5px;
}
.action-buttons .control.is-grouped {
  display: inline-block;
  margin-right: 30px;
}
.action-buttons .control.is-grouped:last-child {
  margin-right: 0;
}
.action-buttons .control.is-grouped .button:first-child {
  border-radius: 5px 0 0 5px;
}
.action-buttons .control.is-grouped .button:last-child {
  border-radius: 0 5px 5px 0;
}
.action-buttons .control.is-grouped .button {
  margin-right: -5px;
  border-radius: 0;
}
.pg {
  display: inline-block;
  top:10px;
}
.action-buttons .pg .title {
  display: block;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 3px;
  font-size:12px;
  color: #AAAAAA;
}
.action-buttons .pg a{
  font-size:12px;
  color: #AAAAAA;
  text-decoration: none;
}
.is-grouped .button {
  background-image: linear-gradient(#F8F8F8, #F1F1F1);
}
.is-grouped .button .fa {
  font-size: 15px;
  color: #AAAAAA;
}
.inbox-messages {
  height: 600px;
  overflow-y: auto;
  margin-top:60px;
}
.message-preview {
  height: 600px;
  overflow-y: auto;
  margin-top: 60px;
}
.inbox-messages .card {
  width: 100%;
}
.inbox-messages strong {
  color: #5D5D5D;
}
.inbox-messages .msg-check {
  padding: 0 20px;
}
.inbox-messages .msg-subject {
  padding: 10px 0;
  color: #5D5D5D;
}
.inbox-messages .msg-attachment {
  float:right;
}
.inbox-messages .msg-snippet {
  padding: 5px 20px 0 5px;
}
.inbox-messages .msg-subject .fa {
  font-size: 14px;
  padding:3px 0;
}
.inbox-messages .msg-timestamp {
  float: right;
  padding: 0 20px;
  color: #5D5D5D;
}
.message-preview .avatar {
  display: inline-block;
}
.message-preview .top .address {
  display: inline-block;
  padding: 0 20px;
}
.avatar img {
  width: 40px;
  border-radius: 50px;
  border: 2px solid #999;
  padding: 2px;
}
.address .name {
  font-size: 16px;
  font-weight: bold;
}
.address .email {
  font-weight: bold;
  color: #B6C7D1;
}
.card.active {
  background-color:#F5F5F5;
}

</style>
