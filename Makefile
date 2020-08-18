DOCKER_REVISION ?= badgr-testing-$(USER)

API_DOCKER_TAG = docker-push.ocf.berkeley.edu/badgr-api:$(DOCKER_REVISION)
UI_DOCKER_TAG = docker-push.ocf.berkeley.edu/badgr-ui:$(DOCKER_REVISION)

API_VERSION := v3.5.4
# TODO: Switch this to an actual tagged version, once a functional one is released.
UI_VERSION := develop

.PHONY: cook-image
cook-image:
	docker build --build-arg api_version=$(API_VERSION) --pull -f Dockerfile.api -t $(API_DOCKER_TAG) .
	docker build --build-arg ui_version=$(UI_VERSION) --pull -f Dockerfile.ui -t $(UI_DOCKER_TAG) .

.PHONY: push-image
push-image:
	docker push $(API_DOCKER_TAG)
	docker push $(UI_DOCKER_TAG)
