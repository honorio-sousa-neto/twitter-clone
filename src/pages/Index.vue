<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
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
              autogrow
            >
              <template v-slot:before>
                <q-avatar size="lg">
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
                </q-avatar>
              </template>
            </q-input>
          </div>
          <div class="col col-shrink q-mb-lg">
            <q-btn
              :disabled="!qweetContent"
              @click="addTweet"
              unelevated
              rounded
              color="primary"
              label="Qweet"
              no-caps
            />
          </div>
        </div>
      </div>

      <q-separator color="grey-3" size="10px" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated backInLeft slow"
          leave-active-class="animated backOutRight slow"
        >
          <q-item
            v-for="tweet in state.tweets"
            :key="tweet.id"
            class="q-pt-lg"
          >
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Slime Code</strong>
                <span class="text-grey-7">@slime_code</span>
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
                  @click="toggleQweet(tweet)"
                  size="sm"
                  flat
                  round
                  :color="tweet.isLiked ? 'pink' : 'grey'"
                  :icon="tweet.isLiked ? 'fas fa-heart': 'far fa-heart'"
                />
                <q-btn
                  @click="deleteQweet(tweet)"
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
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { collection, query, onSnapshot, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import db from "../boot/firebase";

export default defineComponent({
  name: "PageIndex",
  setup() {
    let qweetContent = ref("");
    let color = ref("grey");

    let state = reactive({
      tweets: []
    })

    onMounted(() => {
      const q = query(collection(db, "qweets"));
      onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let qweetChange = change.doc.data()
          qweetChange.id = change.doc.id

          if (change.type === "added") {
            state.tweets.unshift(qweetChange)
          }
          if (change.type === "modified") {
            let index = state.tweets.findIndex((tweet) => tweet.id === qweetChange.id)
            Object.assign(state.tweets[index], qweetChange)
          }
          if (change.type === "removed") {
            let index = state.tweets.findIndex((tweet) => tweet.id === qweetChange.id);
            state.tweets.splice(index, 1);
          }
        });
      });
    });
    async function addTweet() {
      
      let tweet = {
        content: qweetContent.value,
        date: Date.now(),
        isLiked: false,
      }

      await addDoc(collection(db, "qweets"), tweet)
      qweetContent.value = "";
    }

    async function deleteQweet(tweet) {

      await deleteDoc(doc(db, "qweets", tweet.id))
    }

    async function toggleQweet(tweet) {

      const tweetRef = doc(db, "qweets", tweet.id);
      console.log(tweetRef)
      await updateDoc(tweetRef, {
        isLiked: !tweet.isLiked
      });
    }
    return {
      state,
      qweetContent,
      color,

      toggleQweet,
      addTweet,
      deleteQweet,
    };
  },
});
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
