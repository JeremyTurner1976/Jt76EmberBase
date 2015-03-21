using System.Diagnostics;
using System.Linq;
using System.Reflection;
using Jt76EmberBase.Data.Database.ModelRepositories;
using Jt76EmberBase.Data.Models;

namespace Jt76EmberBase.Ui
{
    public class UiViewModel
    {
        private readonly IErrorRepository _errorRepository;
        private readonly ILogMessageRepository _logMessageRepository;
        private readonly IUiService _uiService;

        public UiViewModel(IErrorRepository errorRepository, ILogMessageRepository logMessageRepository, IUiService uiService)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _errorRepository = errorRepository;
            _logMessageRepository = logMessageRepository;
            _uiService = uiService;
        }

        public bool SaveErrors()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _errorRepository.Save();
        }

        public bool SaveLogMessages()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _logMessageRepository.Save();
        }


        public IQueryable<Error> GetErrors()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _errorRepository.GetErrors();
        }

        public IQueryable<LogMessage> GetLogMessages()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _logMessageRepository.GetLogMessages();
        }

        public bool AddError(Error newError)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _errorRepository.AddError(newError, true);
        }

        public bool AddLogMessage(LogMessage logMessage)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _logMessageRepository.AddLogMessage(logMessage, true);
        }

        public bool DeleteError(int id)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _errorRepository.DeleteError(id, true);
        }

        public bool DeleteLogMessage(int id)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _logMessageRepository.DeleteLogMessage(id, true);
        }

        public bool UpdateError(Error error)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _errorRepository.UpdateError(error, true);
        }

        public bool UpdateLogMessage(LogMessage logMessage)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _logMessageRepository.UpdateLogMessage(logMessage, true);
        }
    }
}