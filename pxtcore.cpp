void registerWithDal(int id, int event, Action a, int flags = 16); // EVENT_LISTENER_DEFAULT_FLAGS
void runInParallel(Action a);
void runForever(Action a);
void waitForEvent(int id, int event);