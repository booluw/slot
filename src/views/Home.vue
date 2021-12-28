<template>
  <main class="section">
    <div class="card" v-for="i in 20" :key="i">
      <div class="card__header">
        <h3 class="card__heading" @click="openThis()">hello world</h3>
        <i class="lni lni-pencil" @click="editThis()"></i>
      </div>
      <p class="card__paragraph" @click="openThis()">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo tempora beatae sit illum reiciendis, nam, libero quam ad dolorum suscipit, aperiam ab excepturi officiis magni? Dolor, reprehenderit? Dolore saepe repellat voluptatibus necessitatibus id atque corrupti voluptatum, autem minima asperiores dolores error cumque ratione eaque omnis quidem ullam non rerum quisquam mollitia eius sed inventore ad. Veritatis assumenda non qui quia nisi voluptatem doloribus obcaecati! Fugit recusandae perferendis ratione exercitationem natus voluptas, eius quos. Pariatur ipsam eveniet ratione laborum ipsum, quibusdam repellendus distinctio. Hic, eum exercitationem sequi autem eos saepe nesciunt quidem nulla. Saepe consectetur, nemo porro quod qui in adipisci perferendis quibusdam ducimus voluptatum consequatur magni cum. Reiciendis sunt harum tempore, eos tenetur in, saepe nostrum quidem, aut sint dicta ipsam veniam! Laudantium ipsum cum aut eveniet nostrum id quam reiciendis quos? Esse excepturi laborum qui numquam vitae minus dicta? In, omnis. Animi repudiandae ea, magnam perferendis unde necessitatibus, illum aliquid ducimus, incidunt fugit qui voluptatum! Quas reprehenderit saepe fuga molestiae? Libero voluptas, dicta sunt incidunt itaque blanditiis ipsa voluptatum laboriosam excepturi saepe quidem consequuntur nesciunt nihil praesentium deleniti error. Dignissimos expedita nisi ex quisquam dicta deleniti ullam! Eius ea magnam nemo dolores reprehenderit perferendis, accusantium amet. Omnis quam aut et, ut qui nostrum saepe molestiae tenetur labore provident alias sequi, neque ipsam, architecto ad illum non accusamus natus at facere ex vel. Quasi, aut inventore quis reprehenderit officiis ipsa sequi consequuntur ad, quaerat blanditiis unde tempore nemo laboriosam. Laudantium sed deserunt saepe eveniet obcaecati nemo tempora, dolores alias sint velit repellendus aperiam totam, deleniti a perspiciatis nihil, quis eum nam aliquid atque? Reiciendis veritatis incidunt omnis aut ipsum, voluptas voluptatem exercitationem pariatur porro corporis iure commodi dolorem animi officiis, accusamus rem! Dolore voluptas molestias nobis quis ipsam non sint, vitae ab eveniet dolorem minima. Error, alias possimus. Error accusamus delectus temporibus libero, dolor beatae quis, recusandae animi omnis facilis incidunt iure voluptatibus amet inventore? Obcaecati quam nemo labore. Minima voluptas expedita porro. Nihil impedit quos cupiditate culpa? Aliquam excepturi recusandae vero explicabo corporis. Odit vero corrupti obcaecati deleniti doloremque velit architecto recusandae asperiores labore aliquid? Mollitia voluptatum tenetur eos quisquam reiciendis quibusdam beatae perspiciatis molestias accusantium animi? Laborum vero cumque provident obcaecati eligendi architecto? Aliquid accusantium repellendus tempore omnis incidunt quia, voluptas distinctio similique eum quis obcaecati deleniti suscipit atque iste. A, facilis? Ipsa necessitatibus eligendi minima voluptate, consequatur ipsam possimus iure esse dignissimos aperiam maxime suscipit reprehenderit, ex laborum distinctio! Quia odio repellat tempore perferendis voluptate dignissimos magnam ex necessitatibus! Itaque, quidem veritatis voluptatem odio vel ea beatae, quo voluptates nam, excepturi voluptatibus numquam harum. Voluptate ab recusandae vel animi alias placeat! Est perspiciatis mollitia, ut culpa illo quas totam itaque omnis repudiandae dolor necessitatibus eveniet incidunt, inventore quis officia, ea porro cum minima a ipsum debitis non. Officia distinctio fugiat voluptatem quisquam veritatis ipsum doloribus provident in dolorem adipisci, nulla sed placeat, modi dolorum. Distinctio vitae esse fugit quia, hic praesentium eius quam qui corporis quae officia non quidem sequi aliquid animi consequatur, ea a ratione!
      </p>
      <div class="card__footer">
        <div @click="fromThisLocation()">
          <i class="lni lni-pin"></i> Abuja, NG
        </div>
        <div>
          <i class="lni lni-alarm-clock"></i> 3hrs ago
        </div>
        <div @click="shareThis()">
          <i class="lni lni-share-alt-1"></i>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    openThis() {
      alert('Openning a slot')
    },
    shareThis() {
      alert('Sharing a slot')
    },
    fromThisLocation() {
      alert('Showing all slots from this location')
    },
    editThis() {
      alert('Editting a slot')
    }
  }
}
</script>
