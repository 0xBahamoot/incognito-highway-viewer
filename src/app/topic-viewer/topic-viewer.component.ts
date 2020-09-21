import { Component, OnInit } from '@angular/core';
import { BackendService } from './../backend.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-topic-viewer',
  templateUrl: './topic-viewer.component.html',
  styleUrls: ['./topic-viewer.component.scss']
})
export class TopicViewerComponent implements OnInit {
  node: string = '';
  availiableTopics: any[];
  selectedTopic: string = '';
  topicContent: string;
  constructor(private route: ActivatedRoute, public backend: BackendService) {
    this.availiableTopics = new Array<any>();
    this.route.queryParams.subscribe(params => {
      this.node = params.node;
      setTimeout(() => {
        this.availiableTopics.push({
          Content: "/shard0/block",
        });
        this.availiableTopics.push({
          Content: "/shard2/block",
        });
        this.availiableTopics.push({
          Content: "/shard3/block",
        });
        this.availiableTopics.push({
          Content: "/shard5/block",
        });

        // backend.connectToLogStreamer(this.node, this.lines);
        // backend.logStream.subscribe(log => {
        //   this.logItem.push(log);
        //   if (this.filterString !== '') {
        //     if (log.toLowerCase().includes(this.filterString)) {
        //       this.filterLogItem.push(log);
        //     }
        //   }
        // });

      }, 500);
    });
  }

  ngOnInit(): void {

  }

  getTopicData(topic: string) {
    this.selectedTopic = topic;
    this.topicContent = 'sdfhsjfpwerpoi';
  }

  resetViewTopic() {
    this.selectedTopic = '';
    this.topicContent = '';
  }

}
