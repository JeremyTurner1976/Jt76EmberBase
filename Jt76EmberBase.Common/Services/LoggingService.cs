﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Jt76EmberBase.Common.ObjectExtensions;
using Jt76EmberBase.Data.Database.ModelRepositories;
using Jt76EmberBase.Data.Factories;
using Jt76EmberBase.Data.Models;

namespace Jt76EmberBase.Common.Services
{
    //interface
    public interface ILoggingService
    {
        bool LogError(Exception e, ErrorLevels errorLevel = ErrorLevels.Default,
            string strAdditionalInformation = "Additional Information Default");

        bool LogMessage(string strLogMessage);
    }

    //EmailLoggingService
    public class EmailLoggingService : ILoggingService
    {
        private readonly IEmailService _emailService;

        public EmailLoggingService(IEmailService emailService)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _emailService = emailService;
        }

        public bool LogError(Exception e, ErrorLevels errorLevel = ErrorLevels.Default,
            string strAdditionalInformation = "Additional Information Default")
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            var sb = new StringBuilder();
            sb.AppendLine(strAdditionalInformation);
            sb.AppendLine(errorLevel.ToNameString());
            sb.AppendLine(ErrorFactory.GetErrorAsString(e));

            _emailService.SendMeMail(sb.ToString());
            return true;
        }

        public bool LogMessage(string strLogMessage)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _emailService.SendMeMail(strLogMessage);
            return true;
        }

        public Task<IEnumerable<bool>> LogMessageObservable(string strLogMessage)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //async can wait for !Result.Contains(false) if a valid return is wanted
            return _emailService.SendMeMail(strLogMessage);
        }
    }

    //DbLoggingService
    public class DbLoggingService : ILoggingService
    {
        private readonly IErrorRepository _errorRepository;
        private readonly ILogMessageRepository _logMessageRepository;

        public DbLoggingService(IErrorRepository errorRepository, ILogMessageRepository logMessageRepository)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _errorRepository = errorRepository;
            _logMessageRepository = logMessageRepository;
        }

        public bool LogError(Exception e, ErrorLevels errorLevel = ErrorLevels.Default,
            string strAdditionalInformation = "Additional Information Default")
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            Error newError = ErrorFactory.GetErrorFromException(e, errorLevel, strAdditionalInformation);

            return _errorRepository.AddError(newError, true);
        }

        public bool LogMessage(string strLogMessage)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            var logMessage = new LogMessage
            {
                StrLogMessage = strLogMessage,
                DtCreated = DateTime.UtcNow
            };

            return _logMessageRepository.AddLogMessage(logMessage, true);
        }
    }

    //FileLoggingService
    public class FileLoggingService : ILoggingService
    {
        private readonly IFileService _fileService;

        public FileLoggingService(IFileService fileService)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _fileService = fileService;
        }

        public bool LogError(Exception e, ErrorLevels errorLevel = ErrorLevels.Default,
            string strAdditionalInformation = "Additional Information Default")
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            var sb = new StringBuilder();
            sb.AppendLine("______________________________ERROR_________________________________");
            sb.AppendLine(strAdditionalInformation);
            sb.AppendLine(errorLevel.ToNameString());
            sb.AppendLine(ErrorFactory.GetErrorAsString(e));
            sb.AppendLine();
            sb.AppendLine();

            _fileService.SaveTextToDirectoryFile(DirectoryFolders.Jt76Errors, sb.ToString());
            return true;
        }

        public bool LogMessage(string strLogMessage)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            var sb = new StringBuilder();
            sb.AppendLine(strLogMessage);

            _fileService.SaveTextToDirectoryFile(DirectoryFolders.Jt76Logs, sb.ToString());
            return true;
        }
    }
}