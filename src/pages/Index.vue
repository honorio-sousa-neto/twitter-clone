<template>
  <q-page>
    <div class="q-py-md q-px-lg">
      <div class="row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            class="input-qweet"
            v-model="qweetContent"
            bottom-slots
            placeholder="Type something here..."
            counter
            maxlength="289"
            dense
            autogrow>
            <template v-slot:before>
              <q-avatar size="lg">
                <img src="https://cdn.quasar.dev/img/avatar3.jpg">
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink q-mb-lg">
          <q-btn
            :disabled="!qweetContent"
            unelevated
            rounded
            color="primary"
            label="Qweet"
            no-caps />
        </div>
      </div>
    </div>

    <q-separator
      color="grey-3"
      size="10px"
    />

    <q-list separator>

      <q-item
        v-for="tweet in state.tweets"
        :key="tweet.date"
        class="q-pt-lg"
      >
        
        <q-item-section
          avatar
          top 
        >
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar3.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Slime Code</strong> <span class="text-grey-7">@slime_code</span>
          </q-item-label>

          <q-item-label class="qweet-text text-body1">
           {{ tweet.content }}
          </q-item-label>

          <div class="btn-group row justify-between q-mt-md">
            <q-btn
              size="sm"
              flat
              round
              color="grey"
              icon="far fa-comment" 
            />
            <q-btn
              size="sm"
              flat
              round
              color="grey"
              icon="fas fa-retweet" 
            />
            <q-btn
              size="sm"
              flat
              round
              color="grey"
              icon="fas fa-heart" 
            />
            <q-btn
              size="sm"
              flat
              round
              color="grey"
              icon="fas fa-trash" 
            />
          </div>
        </q-item-section>

        <q-item-section side top>
          {{ tweet.date }}
        </q-item-section>

        
      </q-item>

      
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup () {
    let qweetContent = ref('')
    let state = reactive({
      tweets: [
        {
          content: ' be in your neighborhood doing errands this weekend. Do you want to grab brunch? be in your neighborhood doing errands this weekend. Do you want to grab brunch?be in your neighborhood doing errands this weekend. Do you want to grab brunch?',
          date: 1634052509048
        },
        {
          content: ' be in your neighborhood doing errands this weekend. Do you want to grab brunch? be in your neighborhood doing errands this weekend. Do you want to grab brunch?be in your neighborhood doing errands this weekend. Do you want to grab brunch?',
          date: 1634052568966
        }
      ]
    })
    return {
      state,
      qweetContent
    }
  }
})
</script>

<style lang="sass">
  .input-qweet
    textarea
      font-size: 16px
      line-height: 1.4 !important

  .qweet-text
    white-space: pre-line
  .btn-group
    margin-left: -5px
</style>
