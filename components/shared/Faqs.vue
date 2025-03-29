<template>
  <v-card flat>
    <v-card-title>FREQUENTLY ASKED QUESTION</v-card-title>
    <v-card class="pa-5" flat>
      <v-expansion-panels flat color="#F0F2F5" style="border: 1px solid #E5E4E4;">

        <v-expansion-panel
          style="border: 1px solid #E5E4E4;"
            v-for="(item, index) in items" :key="index">
          <v-expansion-panel-header>
            <strong>{{ item.title }}</strong>
            <template v-slot:actions>
              <v-icon>
                mdi-arrow-right-thin
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ol>
              <li><strong>{{ item.subtitle }}</strong>
                <ul>
                  <li>{{ item.subtext }}</li>
                </ul>
              </li>
            </ol>
          </v-expansion-panel-content>

        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      items: [{
        title: 'What is Lorem Ipsum?',
        subtitle: 'Lorem Ipsum',
        subtext: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      },
      {
        title: 'Why do we use it?',
        subtitle: 'Why',
        subtext: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
      },
      {
        title: 'Where does it come from?',
        subtitle: 'Where',
        subtext: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

`
      }]
    }
  }
} 
</script>