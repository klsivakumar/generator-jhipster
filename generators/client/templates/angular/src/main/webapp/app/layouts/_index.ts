<%#
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see http://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-%>
export * from './error/error.component';
export * from './error/error.route';
export * from './main/main.component';
export * from './footer/footer.component';
export * from './navbar/navbar.component';
export * from './navbar/navbar.route';
<%_ if (enableTranslation) { _%>
export * from './navbar/active-menu.directive';
<%_ } _%>
export * from './profiles/page-ribbon.component';
export * from './profiles/profile.service';
export * from './profiles/profile-info.model';
